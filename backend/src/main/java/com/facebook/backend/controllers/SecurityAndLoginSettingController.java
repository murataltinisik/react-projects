package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.SecurityAndLoginSettingRequestObject;
import com.facebook.backend.controllers.requestObjects.UserRequestObject;
import com.facebook.backend.entities.SecurityAndLoginSetting;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.services.SecurityAndLoginSettingService;
import com.facebook.backend.utilities.ICrudUtility;
import com.facebook.backend.utilities.PasswordHashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/security-login-settings")
public class SecurityAndLoginSettingController implements ICrudUtility<SecurityAndLoginSetting, SecurityAndLoginSettingRequestObject> {
    @Autowired
    private SecurityAndLoginSettingService service;

    @Autowired
    private IUserService userService;

    @Autowired
    private PasswordHashing hashing;

    @Override
    @PostMapping
    public ResponseEntity<SecurityAndLoginSetting> store(@RequestBody SecurityAndLoginSettingRequestObject o) {
        try {
            SecurityAndLoginSetting setting = new SecurityAndLoginSetting();

            setting.setUser(o.getUser());

            return ResponseEntity.ok(service.save(setting));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<?> update(long id, SecurityAndLoginSettingRequestObject o) {
        return null;
    }

    @Override
    public void destroy(long id) {

    }

    @Override
    @GetMapping(value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        try{
            return ResponseEntity.ok(service.findById(id));
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public ResponseEntity<List<SecurityAndLoginSetting>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @PatchMapping(value = "{id}")
    public ResponseEntity<?> updateSetting(@PathVariable long id, @RequestBody UserRequestObject o) {
        try {
            Optional<User> user = userService.findById(id);
            boolean isItTrue = hashing.decoder(o.getPassword(), user.get().getPassword());

            if(isItTrue){
                if(o.getNewPassword().equals(o.getNewPasswordAgain())){
                    user.get().setPassword(hashing.encoder(o.getNewPassword()));
                    return ResponseEntity.ok(userService.save(user.get()));
                }else{
                    return ResponseEntity.ok("Password Not Matching!!!");
                }
            }else{
                return ResponseEntity.ok("Your Password Wrong!!!");
            }
        }catch (Exception e){
            throw e;
        }
    }
}
