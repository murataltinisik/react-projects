package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.SavedPostRequestObject;
import com.facebook.backend.entities.SavedPost;
import com.facebook.backend.entities.Shipment;
import com.facebook.backend.entities.User;
import com.facebook.backend.services.ISavedPostService;
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
@RequestMapping("/savedPosts")
public class SavedPostController implements ICrudUtility<SavedPost, SavedPostRequestObject> {
    @Autowired
    private ISavedPostService service;

    @Override
    @PostMapping(name = "/")
    @CacheEvict(cacheNames = {"allSavedPosts", "allSavedPostsOfUser", "allSavedPostsOfShipment"}, allEntries = true)
    public ResponseEntity<SavedPost> store(@RequestBody SavedPostRequestObject o) {
        try{
            SavedPost savedPost = new SavedPost();

            savedPost.setUser(o.getUser());
            savedPost.setShipment(o.getShipment());

            return ResponseEntity.ok(service.save(savedPost));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PutMapping(name = "/", value = "{id}")
    @CacheEvict(cacheNames = {"allSavedPosts", "allSavedPostsOfUser", "allSavedPostsOfShipment"}, allEntries = true)
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody SavedPostRequestObject o) {
        try{
            Optional<SavedPost> savedPost = service.findById(id);

            savedPost.get().setUser(o.getUser());
            savedPost.get().setShipment(o.getShipment());

            return ResponseEntity.ok(service.save(savedPost.get()));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @DeleteMapping(name = "/", value = "/{id}")
    @CacheEvict(cacheNames = {"allSavedPosts", "allSavedPostsOfUser", "allSavedPostsOfShipment"}, allEntries = true)
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    @GetMapping(name = "/", value = "/{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            Optional<SavedPost> savedPost = service.findById(id);

            // SHIPMENT
            Shipment shipment = new Shipment();
            shipment.setImage(savedPost.get().getShipment().getImage());
            shipment.setMessage(savedPost.get().getShipment().getMessage());
            shipment.setDescription(savedPost.get().getShipment().getDescription());

            // USER
            User user = new User(savedPost.get().getUser().getId());

            return ResponseEntity.ok(new SavedPost(user, shipment));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/")
    @Cacheable("allSavedPosts")
    public ResponseEntity<List<SavedPost>> findAll() {
        try{
            ArrayList<SavedPost> savedPostList = (ArrayList<SavedPost>) service.findAll();

            if(!savedPostList.isEmpty()){
                ArrayList<SavedPost> restrictedDatas = new ArrayList<>();

                for(SavedPost post : savedPostList){
                    // SHIPMENT
                    Shipment shipment = new Shipment();
                    shipment.setImage(post.getShipment().getImage());
                    shipment.setMessage(post.getShipment().getMessage());
                    shipment.setDescription(post.getShipment().getDescription());

                    restrictedDatas.add(new SavedPost(new User(post.getUser().getId()),shipment));
                }
                return ResponseEntity.ok(restrictedDatas);
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

    @GetMapping(name = "/", value = "/ofUser/{id}")
    @Cacheable("allSavedPostsOfUser")
    public ResponseEntity<List<SavedPost>> theSavedPostsOfUser(@PathVariable long id){
        try{
            ArrayList<SavedPost> savedPosts = service.findByUserId(id);

            if(savedPosts.size() > 0){
                ArrayList<SavedPost> restrictedDatas = new ArrayList<>();
                for(SavedPost post : savedPosts){
                    // SHIPMENT
                    Shipment shipment = new Shipment();
                    shipment.setImage(post.getShipment().getImage());
                    shipment.setMessage(post.getShipment().getMessage());
                    shipment.setDescription(post.getShipment().getDescription());

                    // USER
                    User user = new User(post.getUser().getId());

                    restrictedDatas.add(new SavedPost(user, shipment));
                }
                return ResponseEntity.ok(restrictedDatas);
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @GetMapping(name = "/", value = "/ofShipment/{id}")
    @Cacheable("allSavedPostsOfShipment")
    public ResponseEntity<List<SavedPost>> theSavedPostsOfShipment(@PathVariable long id){
        try{
            ArrayList<SavedPost> savedPosts = service.findByShipmentId(id);

            if(savedPosts.size() > 0){
                ArrayList<SavedPost> restrictedDatas = new ArrayList<>();

                for(SavedPost post : savedPosts){
                    // SHIPMENT
                    Shipment shipment = new Shipment();
                    shipment.setImage(post.getShipment().getImage());
                    shipment.setMessage(post.getShipment().getMessage());
                    shipment.setDescription(post.getShipment().getDescription());

                    // USER
                    User user = new User(post.getUser().getId());

                    restrictedDatas.add(new SavedPost(user, shipment));
                }

                return ResponseEntity.ok(restrictedDatas);
            }

            return null;
        }catch (Exception e){
            throw e;
        }
    }
}
