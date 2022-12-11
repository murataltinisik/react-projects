package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.ReelDetailRequestObject;
import com.facebook.backend.entities.ReelDetail;
import com.facebook.backend.enums.ReelDetailType;
import com.facebook.backend.services.IReelDetailService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/reels/detail")
public class ReelDetailController implements ICrudUtility<ReelDetail, ReelDetailRequestObject> {
    @Autowired
    private IReelDetailService service;

    @Override
    @PostMapping
    public ResponseEntity<ReelDetail> store(@RequestBody ReelDetailRequestObject o) {
        try{
            ReelDetail detail = new ReelDetail();

            detail.setReel(o.getReel());
            detail.setUser(o.getUser());
            detail.setType(o.getType());

            return ResponseEntity.ok(service.save(detail));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<?> update(long id, ReelDetailRequestObject o) {
        return null;
    }

    @Override
    @DeleteMapping(value = "{id}")
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    public ResponseEntity<?> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<List<ReelDetail>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @GetMapping(value = "/numberOfLikes/{id}")
    public ResponseEntity<Long> theNumberLikesOfReel(@PathVariable long id){
        return ResponseEntity.ok(service.countByReelIdAndType(id, ReelDetailType.LIKE));
    }

    @GetMapping(value = "/numberOfComments/{id}")
    public ResponseEntity<Long> theNumberCommentsOfReel(@PathVariable long id){
        return ResponseEntity.ok(service.countByReelIdAndType(id, ReelDetailType.COMMENT));
    }

    @GetMapping(value = "/numberOfShares/{id}")
    public ResponseEntity<Long> theNumberSharesOfReel(@PathVariable long id){
        return ResponseEntity.ok(service.countByReelIdAndType(id, ReelDetailType.SHARE));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> theDetailsOfReel(@PathVariable long id){
        List<Object> object = service.findAllDetailsOfReel(id);

        HashMap<String, Object> details = new HashMap<>();
        details.put("LIKES", object.get(0));
        details.put("COMMENTS", object.get(1));
        details.put("SHARES", object.get(2));

        return ResponseEntity.ok(details);
    }
}
