package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.UserConfirmationRequestObject;
import com.facebook.backend.controllers.requestObjects.UserRequestObject;
import com.facebook.backend.entities.User;
import com.facebook.backend.entities.UserConfirmation;
import com.facebook.backend.entities.UserInformation;
import com.facebook.backend.enums.UserRole;
import com.facebook.backend.exceptions.userException.UserAlreadyExistsException;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IUserConfirmationService;
import com.facebook.backend.services.IUserInformationService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.ICrudUtility;
import com.facebook.backend.utilities.PasswordHashing;
import com.facebook.backend.utilities.RandomCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController implements ICrudUtility<User, UserRequestObject> {

    @Autowired
    private IUserService service;

    @Autowired
    private IUserInformationService informationService;

    @Autowired
    private IUserConfirmationService confirmationService;

    @Autowired
    private PasswordHashing hashing;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    @PostMapping(name = "/")
    @CacheEvict(cacheNames = "allUsers", allEntries = true)
    public ResponseEntity<User> store(@RequestBody UserRequestObject o) throws UserAlreadyExistsException {
        if(service.countByEmailPhone(o.getEmailPhone()) > 0){
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
    @CacheEvict(cacheNames = "allUsers", allEntries = true)
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
                    user.get().setEmailPhone(o.getEmailPhone());

                    service.save(user.get());

                    // RESTRICTED DATA
                    User restrictedData = new User(
                            user.get().getName(),
                            user.get().getSurname(),
                            user.get().getUsername(),
                            user.get().getEmailPhone()
                    );
                    restrictedData.setId(id);
                    restrictedData.setCreatedAt(user.get().getCreatedAt());
                    restrictedData.setUpdatedAt(user.get().getUpdatedAt());

                    return ResponseEntity.ok(restrictedData);
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
    @CacheEvict(cacheNames = "allUsers", allEntries = true)
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
                restrictedData.setId(id);
                restrictedData.setCreatedAt(user.get().getCreatedAt());

                // HATEOAS
                Link self = WebMvcLinkBuilder.linkTo(UserController.class)
                        .slash(id).withSelfRel();
                Link create = WebMvcLinkBuilder.linkTo(UserController.class)
                        .slash("").withRel("create");
                Link update = WebMvcLinkBuilder.linkTo(UserController.class)
                        .slash(id).withRel("update");
                Link delete = WebMvcLinkBuilder.linkTo(UserController.class)
                        .slash(id).withRel("delete");
                EntityModel<User> resource = EntityModel.of(restrictedData, self, create, update, delete);

                return ResponseEntity.ok(resource);
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
    @Cacheable("allUsers")
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
    public ResponseEntity<?> loginUser(@RequestBody UserRequestObject o) throws UserNotFoundException{
        User user = service.findByEmailPhone(o.getEmailPhone());
        try{
            if(user.getDeletedAt() == null){
                boolean isItCorrect = hashing.decoder(o.getPassword(), user.getPassword());
                if(isItCorrect){
                    return ResponseEntity.ok(user);
                }
                return ResponseEntity.ok(false);
            }
        }catch (UserNotFoundException e){
            return ResponseEntity.ok("User Not Found!!");
        }catch (Exception e){
            return ResponseEntity.ok(HttpStatus.NOT_FOUND);
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
                   // RESTRICTED DATA
                   User restrictedData = new User();

                   if(o.getNewPassword().equals(o.getNewPasswordAgain())){
                       restrictedData.setPassword(hashing.encoder(o.getNewPassword()));
                       user.get().setPassword(restrictedData.getPassword());
                       service.save(user.get());
                   }else{
                        return ResponseEntity.ok("PASSWORD_NOT_MATCH");
                   }
                   return ResponseEntity.ok("PASSWORD_CHANGED_SUCCESSFUL");
               }else{
                   return ResponseEntity.ok("WRONG_PASSWORD");
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
                // STRING CODE
                String code = new RandomCode(5).randomNumberProduce();
                UserConfirmation confirmation = new UserConfirmation();
                confirmation.setUser(user);
                confirmation.setCode(code);
                confirmationService.save(confirmation);

                // SIMPLE MAIL MESSAGE
                SimpleMailMessage mailMessage = new SimpleMailMessage();
                mailMessage.setFrom("facebook@security.gmail.com");
                mailMessage.setTo(user.getEmailPhone());
                mailMessage.setSubject("EMAIL CONFIRMATION...");
                mailMessage.setText(code);
                mailSender.send(mailMessage);
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @PatchMapping(value = "/confirmation/{id}")
    public ResponseEntity<Boolean> emailConfirmation(@PathVariable long id, @RequestBody UserConfirmationRequestObject o){
        try{
            boolean isTrue = confirmationService.findByUserId(id).getCode().equals(o.getCode());
            return ResponseEntity.ok(isTrue);
        }catch (Exception e){
            throw e;
        }
    }

    @PatchMapping(value = "/recover/{id}")
    public ResponseEntity<?> recoverPassword(@PathVariable long id, @RequestBody UserRequestObject o){
        try{
            Optional<User> user = service.findById(id);
            if(o.getNewPassword().equals(o.getNewPasswordAgain())){
                user.get().setPassword(hashing.encoder(o.getNewPassword()));
            }
            return ResponseEntity.ok(service.save(user.get()));
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
