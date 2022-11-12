package com.facebook.backend.exceptions.userException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.ALREADY_REPORTED)
public class UserAlreadyExistsException extends RuntimeException{
    public UserAlreadyExistsException(){
        super("User Already Exists!");
    }
}
