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
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
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
    @CacheEvict(cacheNames = {"allStories", "allStoriesOfUser"}, allEntries = true)
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
    @CacheEvict(cacheNames = {"allStories", "allStoriesOfUser"}, allEntries = true)
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
    @CacheEvict(cacheNames = {"allStories", "allStoriesOfUser"}, allEntries = true)
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    @GetMapping(name = "/", value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            Optional<Story> optional = service.findById(id);

            Story story = new Story();
            story.setText(optional.get().getText());
            story.setFontStyle(optional.get().getFontStyle());
            story.setBackground(optional.get().getBackground());
            story.setImageSource(optional.get().getImageSource());
            story.setCreatedAt(optional.get().getCreatedAt());
            story.setUser(new User(optional.get().getUser().getName(), optional.get().getUser().getSurname()));

            return ResponseEntity.ok(story);
        }catch (StoryNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/")
    @Cacheable("allStories")
    public ResponseEntity<List<Story>> findAll() {
        try{
            ArrayList<Story> stories = (ArrayList<Story>) service.findAll();
            if(stories.size() > 0){
                ArrayList<Story> newStories = new ArrayList<>();

                for(Story story : stories){
                    Story newStory = new Story();

                    newStory.setText(story.getText());
                    newStory.setFontStyle(story.getFontStyle());
                    newStory.setBackground(story.getBackground());
                    newStory.setImageSource(story.getImageSource());
                    newStory.setCreatedAt(story.getCreatedAt());
                    newStory.setUser(new User(story.getUser().getName(), story.getUser().getSurname()));

                    newStories.add(newStory);
                }
                return ResponseEntity.ok(newStories);
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
    @Cacheable("allStoriesOfUser")
    public ResponseEntity<ArrayList<Story>> theStoriesOfUser(@PathVariable long id){
        return ResponseEntity.ok(service.findByUserId(id));
    }

    @GetMapping(name = "/", value = "/theStoriesOfUser/count/{id}")
    public ResponseEntity<Integer> theStoriesOfUserCount(@PathVariable long id){
        return ResponseEntity.ok(service.countByUserId(id));
    }
}

