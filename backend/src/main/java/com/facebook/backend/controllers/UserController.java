package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.UserRequestObject;
import com.facebook.backend.entities.User;
import com.facebook.backend.enums.UserRole;
import com.facebook.backend.exceptions.userException.UserAlreadyExistsException;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.ICrudUtility;
import com.facebook.backend.utilities.PasswordHashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController implements ICrudUtility<User, UserRequestObject> {

    @Autowired
    private IUserService service;

    @Autowired
    private PasswordHashing hashing;

    @Override
    @PostMapping(name = "/")
    public ResponseEntity<User> store(@RequestBody UserRequestObject o) throws UserAlreadyExistsException {
        if(service.countByUsernameOrEmailPhone(o.getUsername(), o.getEmailPhone()) > 0){
            throw new UserAlreadyExistsException();
        }else{
            try {
                User user = new User();
                user.setName(o.getName());
                user.setSurname(o.getSurname());
                user.setUsername(o.getUsername());
                user.setPassword(hashing.encoder(o.getPassword()));
                user.setEmailPhone(o.getEmailPhone());
                user.setRole(UserRole.MEMBER.ordinal());
                user.setDeletedAt(o.getDeletedAt());
                return ResponseEntity.ok(service.save(user));
            }catch (UserAlreadyExistsException e){
                throw e;
            }catch (Exception e){
                throw e;
            }
        }
    }

    @Override
    @PutMapping(name = "/", value = "{id}")
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody UserRequestObject o) throws UserNotFoundException {
        try{
            Optional<User> user = service.findById(id);
            if(user.get().getDeletedAt() == null){
                if(user.isEmpty()){
                    throw new UserNotFoundException();
                }else{
                    user.get().setName(o.getName());
                    user.get().setSurname(o.getSurname());
                    user.get().setUsername(o.getUsername());
                    user.get().setPassword(o.getPassword());
                    user.get().setEmailPhone(o.getEmailPhone());
                    return ResponseEntity.ok(service.save(user.get()));
                }
            }else{
                throw new UserNotFoundException();
            }
        }catch (UserNotFoundException e){
            return ResponseEntity.ok(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    @DeleteMapping(name = "/", value = "{id}")
    public void destroy(@PathVariable long id) {
        try{
            Optional<User> user = service.findById(id);
            user.get().setDeletedAt(String.valueOf(new Timestamp(System.currentTimeMillis())));
            service.save(user.get());
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/", value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) throws UserNotFoundException {
        try{
            Optional<User> user = service.findById(id);
            if(user.get().getDeletedAt() == null){
                if(user.isEmpty()){
                    throw new UserNotFoundException();
                }
                return ResponseEntity.ok(user);
            }else{
                throw new UserNotFoundException();
            }
        }catch (UserNotFoundException e){
            return ResponseEntity.ok(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    @GetMapping(name="/")
    public ResponseEntity<List<User>> findAll() {
        ArrayList<User> userList = service.findByDeletedAtNull();
        if(userList.size() > 0){
            return ResponseEntity.ok(userList);
        }
        return null;
    }

    @Override
    @GetMapping(name = "/", value = "/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.countByDeletedAtNull());
    }

    @PostMapping(name = "/", value = "login")
    public ResponseEntity<User> loginUser(@RequestBody UserRequestObject o) throws UserNotFoundException{
        User user = service.findByEmailPhone(o.getEmailPhone());
        if(user.getDeletedAt() == null){
            boolean isItCorrect = hashing.decoder(o.getPassword(), user.getPassword());
            if(isItCorrect){
                return ResponseEntity.ok(user);
            }
        }else{
            throw new UserNotFoundException();
        }
        return null;
    }
}
