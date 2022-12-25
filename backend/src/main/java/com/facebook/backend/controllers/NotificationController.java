package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.NotificationRequestObject;
import com.facebook.backend.entities.Notification;
import com.facebook.backend.entities.User;
import com.facebook.backend.services.INotificationService;
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
@RequestMapping("/notifications")
public class NotificationController implements ICrudUtility<Notification, NotificationRequestObject> {
    @Autowired
    private INotificationService service;

    @Override
    @PostMapping
    @CacheEvict(cacheNames = {
            "theNotificationOfUser", "theNotificationShows5",
            "theUserNotification","theUserNotificationsSeen", "theUserNotificationsNotSeen"
        }, allEntries = true
    )
    public ResponseEntity<Notification> store(@RequestBody NotificationRequestObject o) {
        try{
            Notification notification = new Notification();

            notification.setUser(o.getUser());
            notification.setReported(o.getReported());
            notification.setIsSeen(0);

            return ResponseEntity.ok(service.save(notification));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PatchMapping(value = "{id}")
    @CacheEvict(cacheNames = {
            "theNotificationOfUser", "theNotificationShows5",
            "theUserNotification","theUserNotificationsSeen", "theUserNotificationsNotSeen"
        }, allEntries = true
    )
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody NotificationRequestObject o) {
        try{
            Optional<Notification> notification = service.findById(id);

            notification.get().setIsSeen(1);

            return ResponseEntity.ok(service.save(notification.get()));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public void destroy(@PathVariable long id) {}

    @Override
    public ResponseEntity<?> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<List<Notification>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @GetMapping(value = "/ofUser/{id}")
    @Cacheable("theNotificationOfUser")
    public ResponseEntity<List<Notification>> theNotificationOfUser(@PathVariable long id){
        try{
            ArrayList<Notification> notifications = service.findByUserId(id);
            ArrayList<Notification> restrictedDatas = new ArrayList<>();

            for(Notification notification : notifications){
                // USER
                User user = new User(notification.getUser().getName(), notification.getUser().getSurname());

                // REPORTED
                User reported = new User(notification.getReported().getName(), notification.getReported().getSurname());

                restrictedDatas.add(new Notification(user, reported, notification.getIsSeen(), notification.getCreatedAt()));
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (Exception e){
            throw e;
        }
    }

    @GetMapping(value = "show/{id}")
    @Cacheable("theNotificationShows5")
    public ResponseEntity<List<Notification>> theNotificationShows5(@PathVariable long id){
        try{
            ArrayList<Notification> notifications = service.findAllOrderByIdLimit5(id);
            ArrayList<Notification> restrictedDatas = new ArrayList<>();

            for(Notification notification : notifications){
                // USER
                User user = new User(notification.getUser().getName(), notification.getUser().getSurname());

                // REPORTED
                User reported = new User(notification.getReported().getName(), notification.getReported().getSurname());

                restrictedDatas.add(new Notification(user, reported, notification.getIsSeen(), notification.getCreatedAt()));
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (Exception e){
            throw e;
        }
    }

    @GetMapping(value = "/count/{id}")
    @Cacheable("theUserNotification")
    public ResponseEntity<Long> theNumberOfNotification(@PathVariable long id) {
        return ResponseEntity.ok(service.countByUserId(id));
    }

    @GetMapping(value = "/seen/{id}")
    @Cacheable("theUserNotificationsSeen")
    public ResponseEntity<List<Notification>> theUserNotificationsSeen(@PathVariable long id){
        try {
            ArrayList<Notification> notifications = service.findByUserIdAndIsSeen(id, 1);
            ArrayList<Notification> restrictedDatas = new ArrayList<>();

            for(Notification notification : notifications){
                // USER
                User user = new User(notification.getUser().getName(), notification.getUser().getSurname());

                // REPORTED
                User reported = new User(notification.getReported().getName(), notification.getReported().getSurname());

                restrictedDatas.add(new Notification(user, reported, notification.getIsSeen(), notification.getCreatedAt()));
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (Exception e){
            throw e;
        }
    }

    @GetMapping(value = "/notseen/{id}")
    @Cacheable("theUserNotificationsNotSeen")
    public ResponseEntity<List<Notification>> theUserNotificationsNotSeen(@PathVariable long id){
        try {
            ArrayList<Notification> notifications = service.findByUserIdAndIsSeen(id, 0);
            ArrayList<Notification> restrictedDatas = new ArrayList<>();

            for(Notification notification : notifications){
                // USER
                User user = new User(notification.getUser().getName(), notification.getUser().getSurname());

                // REPORTED
                User reported = new User(notification.getReported().getName(), notification.getReported().getSurname());

                restrictedDatas.add(new Notification(user, reported, notification.getIsSeen(), notification.getCreatedAt()));
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (Exception e){
            throw e;
        }
    }
}
