package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.GeneralAccountSettingRequestObject;
import com.facebook.backend.controllers.requestObjects.UserRequestObject;
import com.facebook.backend.entities.GeneralAccountSetting;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IGeneralAccountSettingService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/general-account-setting")
public class GeneralAccountSettingController implements ICrudUtility<GeneralAccountSetting, GeneralAccountSettingRequestObject> {
    @Autowired
    private IGeneralAccountSettingService service;

    @Autowired
    private IUserService userService;

    @Override
    @PostMapping
    @CacheEvict(cacheNames = {"allUsers", "theGetUser"}, allEntries = true)
    public ResponseEntity<GeneralAccountSetting> store(@RequestBody GeneralAccountSettingRequestObject o) {
        try{
            GeneralAccountSetting setting = new GeneralAccountSetting();

            setting.setUser(o.getUser());

            return ResponseEntity.ok(service.save(setting));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<?> update(long id, GeneralAccountSettingRequestObject o) {
        return null;
    }

    @Override
    public void destroy(long id) {

    }

    @Override
    @GetMapping(value = "{id}")
    @Cacheable("theGetUser")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try {
            Optional<User> user = userService.findById(id);
            return ResponseEntity.ok(new User(user.get().getName(), user.get().getSurname(), user.get().getUsername(), user.get().getEmailPhone()));
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<List<GeneralAccountSetting>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @PatchMapping(value = "{id}")
    @CacheEvict(cacheNames = {"allUsers", "theGetUser"}, allEntries = true)
    public ResponseEntity<?> updateUser(@PathVariable long id, @RequestBody UserRequestObject o) {
        try {
            Optional<User> user = userService.findById(id);

            user.get().setName(o.getName());
            user.get().setSurname(o.getSurname());
            user.get().setUsername(o.getUsername());
            user.get().setEmailPhone(o.getEmailPhone());

            return ResponseEntity.ok(userService.save(user.get()));
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }
}
