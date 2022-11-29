package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.ChatNotificationRequestObject;
import com.facebook.backend.entities.ChatNotification;
import com.facebook.backend.entities.User;
import com.facebook.backend.services.IChatNotificationService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chat-notifications")
public class ChatNotificationController implements ICrudUtility<ChatNotification, ChatNotificationRequestObject> {
    @Autowired
    private IChatNotificationService service;

    @Override
    @PostMapping
    public ResponseEntity<ChatNotification> store(@RequestBody ChatNotificationRequestObject o) {
        try {
            ChatNotification notification = new ChatNotification();
            notification.setMessage(o.getMessage());
            notification.setUser(o.getUser());
            notification.setFromWho(o.getFromWho());
            notification.setSeen(o.getSeen());

            return ResponseEntity.ok(service.save(notification));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PatchMapping(value = "{id}")
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody ChatNotificationRequestObject o) {
        try {
            Optional<ChatNotification> notification = service.findById(id);

            notification.get().setSeen(o.getSeen());

            return ResponseEntity.ok(service.save(notification.get()));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @DeleteMapping(value = "{id}")
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    @GetMapping(value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try {
            Optional<ChatNotification> notification = service.findById(id);

            // USER
            User user = new User(notification.get().getUser().getName(), notification.get().getUser().getSurname());

            // FROM WHO
            User fromWho = new User(notification.get().getFromWho().getName(), notification.get().getFromWho().getSurname());

            // MESSAGE
            String message = notification.get().getMessage();

            // SEEN
            int seen = notification.get().getSeen();

            return ResponseEntity.ok(new ChatNotification(user, fromWho, message, seen));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<List<ChatNotification>> findAll() {
        try {
            return ResponseEntity.ok(service.findAll());
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @GetMapping(value = "/ofUser/{id}")
    public ResponseEntity<List<ChatNotification>> theChatNotificationsOfUser(@PathVariable long id){
        try {
            ArrayList<ChatNotification> notifications = service.findByUserId(id);
            ArrayList<ChatNotification> restrictedDatas = new ArrayList<>();

            for(ChatNotification notification : notifications){

                // USER
                User user = new User(notification.getUser().getName(), notification.getUser().getSurname());

                // FROM WHO
                User fromWho = new User(notification.getFromWho().getName(), notification.getFromWho().getSurname());

                // MESSAGE
                String message = notification.getMessage();

                // SEEN
                int seen = notification.getSeen();

                restrictedDatas.add(new ChatNotification(user, fromWho, message, seen));
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (Exception e){
            throw e;
        }
    }

    @GetMapping(value = "/ofUser/{id}/count")
    public ResponseEntity<Integer> theChatNotificationCountOfUser(@PathVariable long id){
        return ResponseEntity.ok(service.countByUserId(id));
    }

    @GetMapping(value = "/ofUser/{id}/seen/{seen}")
    public ResponseEntity<List<ChatNotification>> TheMessagesSeen(@PathVariable long id, @PathVariable int seen){
        try {
            ArrayList<ChatNotification> notifications = service.findByUserIdAndSeenEquals(id, seen);
            ArrayList<ChatNotification> restrictedDatas = new ArrayList<>();

            for(ChatNotification notification : notifications){
                // USER
                User user = new User(notification.getUser().getName(), notification.getUser().getSurname());

                // FROM WHO
                User fromWho = new User(notification.getFromWho().getName(), notification.getFromWho().getSurname());

                // MESSAGE
                String message = notification.getMessage();

                restrictedDatas.add(new ChatNotification(user, fromWho, message));
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (Exception e){
            throw e;
        }
    }
}
