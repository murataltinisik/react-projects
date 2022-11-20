package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.CommentRequestObject;
import com.facebook.backend.entities.AnswerOfUser;
import com.facebook.backend.entities.Comment;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.commentException.CommentNotFoundException;
import com.facebook.backend.services.ICommentService;
import com.facebook.backend.services.IShipmentService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.CurrentTime;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController implements ICrudUtility<Comment, CommentRequestObject> {
    @Autowired
    private ICommentService service;

    @Autowired
    private IShipmentService shipmentService;

    @Autowired
    private IUserService userService;

    @Override
    @PostMapping
    public ResponseEntity<Comment> store(@RequestBody CommentRequestObject o) {
        try{
            if(userService.findByIdAndDeletedAtNull(o.getUser().getId()).isPresent()){
                Comment comment = new Comment();
                comment.setMessage(o.getMessage());
                comment.setUser(o.getUser());
                comment.setShipment(o.getShipment());
                comment.setCreatedAt(CurrentTime.currentTimeStamp());
                return ResponseEntity.ok(service.save(comment));
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PutMapping(value = "{id}")
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody CommentRequestObject o) {
        try {
            Optional<Comment> answer = service.findById(id);
            answer.get().setAnswer(o.getAnswer());
            return ResponseEntity.ok(service.save(answer.get()));
        }catch (CommentNotFoundException e){
            return ResponseEntity.ok(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    @DeleteMapping(value = "{id}")
    public void destroy(@PathVariable long id) {
        if(!service.findById(id).isEmpty()){
            service.deleteById(id);
        }
    }

    @Override
    @GetMapping(value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try {
            Optional<Comment> comment = service.findById(id);
            return ResponseEntity.ok(comment);
        }catch (CommentNotFoundException e){
            return ResponseEntity.ok(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    @GetMapping
    public ResponseEntity<List<Comment>> findAll() {
        if(service.findAll().size() > 0){
            ArrayList<Comment> comments = (ArrayList<Comment>) service.findAll();
            return ResponseEntity.ok(comments);
        }
        return null;
    }

    @Override
    @GetMapping(value = "/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.count());
    }

    /** COMMENT OF SHIPMENT **/
    @GetMapping(name = "/", value = "/ofShipments/{id}")
    public ResponseEntity<List<Comment>> findAllCommentsOfShipmentId(@PathVariable long id){
        return ResponseEntity.ok(service.findByShipmentId(id));
    }
}
