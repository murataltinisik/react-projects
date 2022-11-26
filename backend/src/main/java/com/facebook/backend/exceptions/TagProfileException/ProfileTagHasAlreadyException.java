package com.facebook.backend.exceptions.TagProfileException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.ALREADY_REPORTED)
public class ProfileTagHasAlreadyException extends RuntimeException {
    public ProfileTagHasAlreadyException(){
        super("Already Available");
    }
}
