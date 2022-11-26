package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.UserRequestObject;
import com.facebook.backend.entities.User;
import com.facebook.backend.entities.UserInformation;
import com.facebook.backend.enums.UserRole;
import com.facebook.backend.exceptions.userException.UserAlreadyExistsException;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IUserInformationService;
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
    private IUserInformationService informationService;

    @Autowired
    private PasswordHashing hashing;

    @Override
    @PostMapping(name = "/")
    public ResponseEntity<User> store(@RequestBody UserRequestObject o) throws UserAlreadyExistsException {
        if(service.countByUsernameOrEmailPhone(o.getUsername(), o.getEmailPhone()) > 0){
            throw new UserAlreadyExistsException();
        }else{
            try {
                // USER DATA
                User user = new User();
                user.setName(o.getName());
                user.setSurname(o.getSurname());
                user.setUsername(o.getUsername());
                user.setPassword(hashing.encoder(o.getPassword()));
                user.setEmailPhone(o.getEmailPhone());
                user.setRole(UserRole.MEMBER.ordinal());
                user.setDeletedAt(o.getDeletedAt());

                // USER SAVED
                service.save(user);

                // USER INFORMATION DATA
                UserInformation information = new UserInformation();
                information.setUser(user);
                information.setBirthday(o.getBirthday());
                information.setGender(o.getGender());

                // INFORMATION SAVED
                informationService.save(information);

                return ResponseEntity.ok(user);
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

            if(!user.isEmpty()){
                User restrictedData = new User(
                        user.get().getName(),
                        user.get().getSurname(),
                        user.get().getUsername(),
                        user.get().getEmailPhone(),
                        user.get().getRole()
                );
                restrictedData.setCreatedAt(user.get().getCreatedAt());

                return ResponseEntity.ok(restrictedData);
            }
            return null;
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
            ArrayList<User> restrictedDatas = new ArrayList<>();

            for(User user: userList){
                User newUser = new User(
                        user.getName(),
                        user.getSurname(),
                        user.getUsername(),
                        user.getEmailPhone(),
                        user.getRole()
                );
                newUser.setCreatedAt(user.getCreatedAt());

                restrictedDatas.add(newUser);
            }

            return ResponseEntity.ok(restrictedDatas);
        }
        return null;
    }

    @Override
    @GetMapping(name = "/", value = "/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.countByDeletedAtNull());
    }

    @PostMapping(name = "/", value = "/login")
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

    @PatchMapping(name = "/", value = "/{id}/newPassword")
    public ResponseEntity<?> newPasswordOfUser(@PathVariable long id, @RequestBody UserRequestObject o){
       try {
           if(service.findByIdAndDeletedAtNull(id).isPresent()){
               Optional<User> user = service.findById(id);
               boolean isItCorrect = hashing.decoder(o.getPassword(), user.get().getPassword());

               if(isItCorrect){
                   User restrictedData = new User();

                   if(o.getNewPassword().equals(o.getNewPasswordAgain())){
                       restrictedData.setPassword(hashing.encoder(o.getNewPassword()));
                       user.get().setPassword(restrictedData.getPassword());
                   }else{
                        return ResponseEntity.ok("Passwords don't match!!!");
                   }
                   return ResponseEntity.ok(service.save(user.get()));
               }
           }
           return null;
       }catch (Exception e){
            throw e;
       }
    }

    @PatchMapping(name = "/", value = "/forgotPassword")
    public ResponseEntity<?> forgotPassword(@RequestBody UserRequestObject o){
        try{
            User user = service.findByEmailPhone(o.getEmailPhone());
            if(user.getDeletedAt() == null){
                if(o.getNewPassword().equals(o.getNewPasswordAgain())){
                    user.setPassword(hashing.encoder(o.getNewPassword()));
                    return ResponseEntity.ok(service.save(user));
                }else{
                    return ResponseEntity.ok("Passwords don't match!!!");
                }
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @GetMapping(name = "/", value = "/info/{id}")
    public ResponseEntity<UserInformation> usersInformation(@PathVariable long id){
        try{
            // USER INFORMATION
            Optional<UserInformation> information = informationService.findByUserId(id);

            information.get().setUser(new User(information.get().getUser().getName(), information.get().getUser().getSurname()));

            return ResponseEntity.ok(information.get());
        }catch (Exception e){
            throw e;
        }
    }

    @PutMapping(name = "/", value = "/info/{id}")
    public ResponseEntity<?> userInformationUpdate(@PathVariable long id, @RequestBody UserRequestObject o){
        try{
            // USER INFORMATION
            Optional<UserInformation> getUserInformation = informationService.findByUserId(id);

            if(getUserInformation.isPresent()){
                getUserInformation.get().setBirthday(o.getBirthday());
                getUserInformation.get().setGender(o.getGender());
                return ResponseEntity.ok(informationService.save(getUserInformation.get()));
            }else{
                UserInformation newUserInformation = new UserInformation();
                newUserInformation.setUser(service.findById(id).get());
                newUserInformation.setGender(o.getGender());
                newUserInformation.setBirthday(o.getBirthday());
                return ResponseEntity.ok(informationService.save(newUserInformation));
            }
        }catch (UserNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }
}
