package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.AnswerOfUserRequestObject;
import com.facebook.backend.entities.AnswerOfUser;
import com.facebook.backend.entities.Comment;
import com.facebook.backend.entities.User;
import com.facebook.backend.services.IAnswerOfUserService;
import com.facebook.backend.services.ICommentService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/answerOfUser")
public class AnswerOfUserController implements ICrudUtility<AnswerOfUser, AnswerOfUserRequestObject> {

    @Autowired
    private IAnswerOfUserService service;

    @Autowired
    private IUserService userService;

    @Autowired
    private ICommentService commentService;

    @Override
    @PostMapping(name = "/")
    @CacheEvict(cacheNames = {"allComments", "allCommentsOfShipment"},
            allEntries = true
    )
    public ResponseEntity<AnswerOfUser> store(@RequestBody AnswerOfUserRequestObject o) {
        try{
            if(userService.findByIdAndDeletedAtNull(o.getUser().getId()).isPresent()) {
                AnswerOfUser answer = new AnswerOfUser();
                answer.setAnswer(o.getAnswer());
                answer.setUser(o.getUser());
                service.save(answer);

                // COMMENT SERVICE
                Optional<Comment> commentExists = commentService.findById(o.getCommentId());
                commentExists.get().setAnswer(answer);
                commentService.save(commentExists.get());

                return ResponseEntity.ok(answer);
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
            Optional<AnswerOfUser> answerOfUser = service.findById(id);

            // USER
            User user = new User(
                    answerOfUser.get().getUser().getName(),
                    answerOfUser.get().getUser().getSurname()
            );
            answerOfUser.get().setUser(user);

            // HATEOAS
            Link self = WebMvcLinkBuilder.linkTo(AnswerOfUserController.class)
                    .slash(id).withSelfRel();
            Link create = WebMvcLinkBuilder.linkTo(AnswerOfUserController.class)
                    .slash("").withRel("create");
            Link update = WebMvcLinkBuilder.linkTo(AnswerOfUserController.class)
                    .slash(id).withRel("update");
            Link delete = WebMvcLinkBuilder.linkTo(AnswerOfUserController.class)
                    .slash(id).withRel("delete");
            EntityModel<AnswerOfUser> resources = EntityModel.of(service.findById(id).get(), self, create, update, delete);

            return ResponseEntity.ok(resources);
        }catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    @GetMapping(name = "/")
    public ResponseEntity<List<AnswerOfUser>> findAll() {
        if(service.findAll().size() > 0){
            ArrayList<AnswerOfUser> answerOfUserList = (ArrayList<AnswerOfUser>) service.findAll();
            ArrayList<AnswerOfUser> restrictedDatas = new ArrayList<>();

            for(AnswerOfUser answerOfUser: answerOfUserList){
                // USER
                User user = new User(
                        answerOfUser.getUser().getName(),
                        answerOfUser.getUser().getSurname()
                );

                restrictedDatas.add(new AnswerOfUser(answerOfUser.getAnswer(), user));
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
}
