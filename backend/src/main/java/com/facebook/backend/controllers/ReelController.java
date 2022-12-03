package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.ReelRequestObject;
import com.facebook.backend.entities.Reel;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.reelException.ReelNotFoundException;
import com.facebook.backend.services.IReelDetailService;
import com.facebook.backend.services.IReelService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/reels")
public class ReelController implements ICrudUtility<Reel, ReelRequestObject> {
    @Autowired
    private IReelService service;

    @Override
    @PostMapping
    public ResponseEntity<Reel> store(@RequestBody ReelRequestObject o) {
        try {
            Reel reel = new Reel();

            reel.setUser(o.getUser());
            reel.setSource(o.getSource());
            reel.setDescription(o.getDescription());

            return ResponseEntity.ok(service.save(reel));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PatchMapping(value = "{id}")
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody ReelRequestObject o) {
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
        try {
            return ResponseEntity.ok(service.findById(id));
        }catch (ReelNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping
    @Transactional
    public ResponseEntity<List<Reel>> findAll() {
        try {
            ArrayList<Reel> reels = service.findAllOrderByIdLimit7();
            ArrayList<Reel> restictedDatas = new ArrayList<>();

            for(Reel reel : reels){
                User user = new User(reel.getUser().getId(), reel.getUser().getName(), reel.getUser().getSurname());
                restictedDatas.add(new Reel(user, reel.getSource(), reel.getDescription()));
            }

            return ResponseEntity.ok(restictedDatas);
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }
}
