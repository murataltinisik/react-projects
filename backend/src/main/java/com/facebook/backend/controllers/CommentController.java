package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.CommentRequestObject;
import com.facebook.backend.entities.AnswerOfUser;
import com.facebook.backend.entities.Comment;
import com.facebook.backend.entities.Shipment;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.commentException.CommentNotFoundException;
import com.facebook.backend.services.ICommentService;
import com.facebook.backend.services.IShipmentService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.CurrentTime;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
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
    @CacheEvict(cacheNames = {"allComments", "allCommentsOfShipment"}, allEntries = true)
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
    @CacheEvict(cacheNames = {"allComments", "allCommentsOfShipment"}, allEntries = true)
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
    @CacheEvict(cacheNames = {"allComments", "allCommentsOfShipment"}, allEntries = true)
    public void destroy(@PathVariable long id) {
        if(!service.findById(id).isEmpty()){
            service.deleteById(id);
        }
    }

    @Override
    @GetMapping(value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            // GET USER
            Optional<Comment> comment = service.findById(id);

            // MESSAGE
            String message = comment.get().getMessage();

            // USER
            User user = new User(comment.get().getUser().getName(), comment.get().getUser().getSurname());

            // SHIPMENT
            Shipment shipment = new Shipment();
            shipment.setImage(comment.get().getShipment().getImage());
            shipment.setMessage(comment.get().getShipment().getMessage());
            shipment.setDescription(comment.get().getShipment().getDescription());
            shipment.setStyleBg(comment.get().getShipment().getStyleBg());
            shipment.setTagUserId(comment.get().getShipment().getTagUserId());
            shipment.setUser(new User(comment.get().getShipment().getUser().getName(), comment.get().getShipment().getUser().getSurname()));

            // ANSWER OF USER
            AnswerOfUser answer = new AnswerOfUser(comment.get().getAnswer().getAnswer(),new User(comment.get().getAnswer().getUser().getName(), comment.get().getAnswer().getUser().getSurname()));

            // COMMENT
            Comment restrictedData = new Comment(message, user, shipment, answer);

            return ResponseEntity.ok(restrictedData);
        }catch (CommentNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping
    @Cacheable("allComments")
    public ResponseEntity<List<Comment>> findAll() {
        ArrayList<Comment> comments = (ArrayList<Comment>) service.findAll();

        if(comments.size() > 0){
            ArrayList<Comment> restrictedDatas = new ArrayList<>();

            for(Comment comment : comments){
                // MESSAGE
                String message = comment.getMessage();

                // USER
                User user = new User(comment.getUser().getName(), comment.getUser().getSurname());

                // SHIPMENT
                Shipment shipment = new Shipment();
                shipment.setImage(comment.getShipment().getImage());
                shipment.setMessage(comment.getShipment().getMessage());
                shipment.setDescription(comment.getShipment().getDescription());
                shipment.setStyleBg(comment.getShipment().getStyleBg());
                shipment.setTagUserId(comment.getShipment().getTagUserId());
                shipment.setUser(new User(comment.getShipment().getUser().getName(), comment.getShipment().getUser().getSurname()));

                // ANSWER OF USER
                AnswerOfUser answer;
                if(comment.getAnswer() != null){
                    answer = new AnswerOfUser(comment.getAnswer().getAnswer(), new User(comment.getAnswer().getUser().getName(), comment.getAnswer().getUser().getSurname()));
                }else{
                    answer = new AnswerOfUser();
                }

                // COMMENT
                Comment newComment = new Comment(message, user, shipment, answer);

                restrictedDatas.add(newComment);
            }

            return ResponseEntity.ok(restrictedDatas);
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
    @Cacheable("allCommentsOfShipment")
    public ResponseEntity<List<Comment>> findAllCommentsOfShipmentId(@PathVariable long id){
        ArrayList<Comment> comments = (ArrayList<Comment>) service.findByShipmentId(id);
        ArrayList<Comment> restrictedDatas = new ArrayList<>();

        for(Comment comment : comments){
            // MESSAGE
            String message = comment.getMessage();

            // USER
            User user = new User(comment.getUser().getName(), comment.getUser().getSurname());

            // SHIPMENT
            Shipment shipment = new Shipment();
            shipment.setImage(comment.getShipment().getImage());
            shipment.setMessage(comment.getShipment().getMessage());
            shipment.setDescription(comment.getShipment().getDescription());
            shipment.setStyleBg(comment.getShipment().getStyleBg());
            shipment.setTagUserId(comment.getShipment().getTagUserId());
            shipment.setUser(new User(comment.getShipment().getUser().getName(), comment.getShipment().getUser().getSurname()));

            // ANSWER OF USER
            AnswerOfUser answer = new AnswerOfUser(comment.getAnswer().getAnswer(),new User(comment.getAnswer().getUser().getName(), comment.getAnswer().getUser().getSurname()));

            // COMMENT
            Comment data = new Comment(message, user, shipment, answer);

            restrictedDatas.add(data);
        }

        return ResponseEntity.ok(restrictedDatas);
    }
}
