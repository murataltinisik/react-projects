package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.StoryRequestObject;
import com.facebook.backend.entities.Story;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.storyException.StoryNotFoundException;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IStoryService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/stories")
public class StoryController implements ICrudUtility<Story, StoryRequestObject> {
    @Autowired
    private IStoryService service;

    @Autowired
    private IUserService userService;

    @Override
    @PostMapping(name = "/")
    public ResponseEntity<Story> store(@RequestBody StoryRequestObject o) {
        try{
            if(userService.findByIdAndDeletedAtNull(o.getUser().getId()).isPresent()){
                Story story = new Story();
                story.setText(o.getText());
                story.setImageSource(o.getImageSource());
                story.setFontStyle(o.getFontStyle());
                story.setBackground(o.getBackground());
                story.setUser(o.getUser());
                return ResponseEntity.ok(service.save(story));
            }else{
                throw new UserNotFoundException();
            }
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PutMapping(name = "/", value = "{id}")
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody StoryRequestObject o) {
        try{
            Optional<User> userExists = userService.findById(o.getUser().getId());
            if(userExists.get().getDeletedAt() == null){
                Optional<Story> story = service.findById(id);
                story.get().setText(o.getText());
                story.get().setImageSource(o.getImageSource());
                story.get().setFontStyle(o.getFontStyle());
                story.get().setBackground(o.getBackground());
                story.get().setUser(o.getUser());
                return ResponseEntity.ok(service.save(story.get()));
            }else{
                throw new UserNotFoundException();
            }
        }catch (StoryNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @DeleteMapping(name = "/", value = "{id}")
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    @GetMapping(name = "/", value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            return ResponseEntity.ok(service.findById(id));
        }catch (StoryNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/")
    public ResponseEntity<List<Story>> findAll() {
        try{
            ArrayList<Story> stories = (ArrayList<Story>) service.findAll();
            if(stories.size() > 0){
                return ResponseEntity.ok(stories);
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/", value = "/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.count());
    }

    @GetMapping(name = "/", value = "/theStoriesOfUser/{id}")
    public ResponseEntity<ArrayList<Story>> theStoriesOfUser(@PathVariable long id){
        return ResponseEntity.ok(service.findByUserId(id));
    }

    @GetMapping(name = "/", value = "/theStoriesOfUser/count/{id}")
    public ResponseEntity<Integer> theStoriesOfUserCount(@PathVariable long id){
        return ResponseEntity.ok(service.countByUserId(id));
    }
}

