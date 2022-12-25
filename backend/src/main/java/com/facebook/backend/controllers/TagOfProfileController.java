package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.TagOfProfileRequestObject;
import com.facebook.backend.entities.TagOfProfile;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.TagProfileException.ProfileTagHasAlreadyException;
import com.facebook.backend.services.ITagOfProfileService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tags-of-profiles")
public class TagOfProfileController implements ICrudUtility<TagOfProfile, TagOfProfileRequestObject> {
    @Autowired
    private ITagOfProfileService service;

    @Autowired
    private IUserService userService;

    @Override
    @PostMapping(name = "/")
    @CacheEvict(cacheNames = {"allTags", "theTagOfProfileOfUser"}, allEntries = true)
    public ResponseEntity<TagOfProfile> store(@RequestBody TagOfProfileRequestObject o) throws ProfileTagHasAlreadyException {
        try{
            if(userService.findByIdAndDeletedAtNull(o.getUser().getId()).isPresent()) {
                if (service.countByUserId(o.getUser().getId()) == 0) {
                    // DETAIL KEY LIST
                    List<String> keyListOfDetails = new ArrayList<>();
                    keyListOfDetails.add("job");
                    keyListOfDetails.add("education");
                    keyListOfDetails.add("city");
                    keyListOfDetails.add("hometown");
                    keyListOfDetails.add("relationship");

                    // DETAILS & HOBBIES HASHMAP
                    HashMap<String, String> details = new HashMap<>();
                    HashMap<Integer, String> hobbies = new HashMap<>();

                    // DETAILS ARE TRANSPORTING TO HASHMAP
                    if(o.getDetails().size() > 0){
                        for (int i=0; i<o.getDetails().size(); i++){
                            details.put(keyListOfDetails.get(i), o.getDetails().get(keyListOfDetails.get(i)));
                        }
                    }

                    // HOBBIES ARE TRANSPORTING TO HASHMAP
                    if(o.getHobbies().size() > 0){
                        for(int i=0; i<o.getHobbies().size(); i++){
                            hobbies.put(i, o.getHobbies().get(i));
                        }
                    }

                    // TAG OF PROFILE CREATED OBJECT
                    TagOfProfile tagOfProfile = new TagOfProfile();
                    tagOfProfile.setUser(o.getUser());
                    tagOfProfile.setBiography(o.getBiography());
                    tagOfProfile.setDetails(details);
                    tagOfProfile.setHobbies(hobbies);
                    tagOfProfile.setSubtraction(o.getSubtraction());

                    return ResponseEntity.ok(service.save(tagOfProfile));
                } else{
                    throw new ProfileTagHasAlreadyException();
                }
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PutMapping(name = "/", value = "{id}")
    @CacheEvict(cacheNames = {"allTags", "theTagOfProfileOfUser"}, allEntries = true)
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody TagOfProfileRequestObject o) {
        try{
            Optional<TagOfProfile> tagOfProfile = service.findById(id);

            // DETAIL KEY LIST
            List<String> keyListOfDetails = new ArrayList<>();
            keyListOfDetails.add("job");
            keyListOfDetails.add("education");
            keyListOfDetails.add("city");
            keyListOfDetails.add("hometown");
            keyListOfDetails.add("relationship");

            // DETAILS & HOBBIES HASHMAP
            HashMap<String, String> details = new HashMap<>();
            HashMap<Integer, String> hobbies = new HashMap<>();

            // DETAILS ARE TRANSPORTING TO HASHMAP
            if(o.getDetails().size() > 0){
                for (int i=0; i<o.getDetails().size(); i++){
                    details.put(keyListOfDetails.get(i), o.getDetails().get(keyListOfDetails.get(i)));
                }
            }

            // HOBBIES ARE TRANSPORTING TO HASHMAP
            if(o.getHobbies().size() > 0){
                for(int i=0; i<o.getHobbies().size(); i++){
                    hobbies.put(i, o.getHobbies().get(i));
                }
            }

            // TAG OF PROFILE CREATED OBJECT
            tagOfProfile.get().setUser(o.getUser());
            tagOfProfile.get().setBiography(o.getBiography());
            tagOfProfile.get().setDetails(details);
            tagOfProfile.get().setHobbies(hobbies);
            tagOfProfile.get().setSubtraction(o.getSubtraction());

            return ResponseEntity.ok(service.save(tagOfProfile.get()));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @DeleteMapping(name = "/", value = "{id}")
    @CacheEvict(cacheNames = {"allTags", "theTagOfProfileOfUser"}, allEntries = true)
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    @GetMapping(name = "/", value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            Optional<TagOfProfile> tagOfProfile = service.findById(id);

            tagOfProfile.get().setUser(new User(tagOfProfile.get().getUser().getName(), tagOfProfile.get().getUser().getSurname()));

            return ResponseEntity.ok(tagOfProfile);
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/")
    @Cacheable("allTags")
    public ResponseEntity<List<TagOfProfile>> findAll() {
        try{
            ArrayList<TagOfProfile> tagOfProfiles = (ArrayList<TagOfProfile>) service.findAll();
            ArrayList<TagOfProfile> restrictedDatas = new ArrayList<>();

            for(TagOfProfile tagOfProfile : tagOfProfiles){
                // TAG OF PROFILE
                TagOfProfile newTagOfProfile = new TagOfProfile();
                newTagOfProfile.setUser(new User(tagOfProfile.getUser().getName(), tagOfProfile.getUser().getSurname()));
                newTagOfProfile.setBiography(tagOfProfile.getBiography());
                newTagOfProfile.setDetails(tagOfProfile.getDetails());
                newTagOfProfile.setHobbies(tagOfProfile.getHobbies());
                newTagOfProfile.setSubtraction(tagOfProfile.getSubtraction());

                restrictedDatas.add(newTagOfProfile);
            }

            return ResponseEntity.ok(restrictedDatas);
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/", value = "/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.count());
    }

    @GetMapping(name = "/", value = "/user/{id}")
    @Cacheable("theTagOfProfileOfUser")
    public ResponseEntity<TagOfProfile> theTagOfProfileOfUser(@PathVariable long id){
        try{
            Optional<TagOfProfile> tagOfProfile = Optional.ofNullable(service.findByUserId(id));

            tagOfProfile.get().setUser(new User(tagOfProfile.get().getUser().getName(), tagOfProfile.get().getUser().getSurname()));

            return ResponseEntity.ok(tagOfProfile.get());
        }catch (Exception e){
            throw e;
        }
    }
}
