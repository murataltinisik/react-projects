package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.FriendRequestObject;
import com.facebook.backend.entities.Friend;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IFriendService;
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
@RequestMapping("/friends")
public class FriendController implements ICrudUtility<Friend, FriendRequestObject> {
    @Autowired
    private IFriendService service;

    @Override
    @PostMapping
    @CacheEvict(cacheNames = {"theFriendsOfUser"}, allEntries = true)
    public ResponseEntity<Friend> store(@RequestBody FriendRequestObject o) {
        try {
            if(!service.findByUserIdAndFriendId(o.getUser().getId(), o.getFriend().getId()).isPresent()){
                Friend friend = new Friend();

                friend.setUser(o.getUser());
                friend.setFriend(o.getFriend());

                return ResponseEntity.ok(service.save(friend));
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<?> update(long id, FriendRequestObject o) {
        return null;
    }

    @Override
    @DeleteMapping(value = "{id}")
    @CacheEvict(cacheNames = {"theFriendsOfUser"}, allEntries = true)
    public void destroy(@PathVariable long id) {
        try{
            service.deleteById(id);
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            Optional<Friend> friend = service.findById(id);

            friend.get().setUser(new User(friend.get().getUser().getName(), friend.get().getUser().getSurname()));
            friend.get().setFriend(new User(friend.get().getFriend().getName(), friend.get().getFriend().getSurname()));
            friend.get().setCreatedAt(friend.get().getCreatedAt());

            return ResponseEntity.ok(friend);
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<List<Friend>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @GetMapping(value = "/ofUser/{id}")
    @Cacheable("theFriendsOfUser")
    public ResponseEntity<List<Friend>> theFriendsOfUser(@PathVariable long id){
        try{
            ArrayList<Friend> friends = service.findByUserId(id);
            ArrayList<Friend> restrictedDatas = new ArrayList<>();

            for(Friend f : friends){
                // USER
                User user = new User(f.getUser().getName(), f.getUser().getSurname());

                // FRIEND
                User friend = new User(f.getFriend().getName(), f.getFriend().getSurname());

                restrictedDatas.add(new Friend(user, friend, f.getCreatedAt()));
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @GetMapping(value = "/ofUser/{id}/count")
    public ResponseEntity<Integer> theNumberOfFriendsOfUser(@PathVariable long id){
        try{
            return ResponseEntity.ok(service.countByUserId(id));
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

}
