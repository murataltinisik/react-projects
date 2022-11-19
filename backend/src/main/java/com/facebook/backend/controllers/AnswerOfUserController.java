package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.AnswerOfUserRequestObject;
import com.facebook.backend.entities.AnswerOfUser;
import com.facebook.backend.services.IAnswerOfUserService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/answerOfUser")
public class AnswerOfUserController implements ICrudUtility<AnswerOfUser, AnswerOfUserRequestObject> {

    @Autowired
    private IAnswerOfUserService service;

    @Autowired
    private IUserService userService;

    @Override
    @PostMapping(name = "/")
    public ResponseEntity<AnswerOfUser> store(@RequestBody AnswerOfUserRequestObject o) {
        try{
            if(userService.findByIdAndDeletedAtNull(o.getUser().getId()).isPresent()) {
                AnswerOfUser answer = new AnswerOfUser();
                answer.setAnswer(o.getAnswer());
                answer.setUser(o.getUser());
                return ResponseEntity.ok(service.save(answer));
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<?> update(long id, AnswerOfUserRequestObject o) {
        return null;
    }

    @Override
    @DeleteMapping(value = "{id}")
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    @GetMapping(value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            return ResponseEntity.ok(service.findById(id));
        }catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    @GetMapping(name = "/")
    public ResponseEntity<List<AnswerOfUser>> findAll() {
        if(service.findAll().size() > 0){
            ArrayList<AnswerOfUser> answerOfUserList = (ArrayList<AnswerOfUser>) service.findAll();
            return ResponseEntity.ok(answerOfUserList);
        }
        return null;
    }

    @Override
    @GetMapping(value = "/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.count());
    }
}
