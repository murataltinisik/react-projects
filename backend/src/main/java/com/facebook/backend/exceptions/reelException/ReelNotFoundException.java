package com.facebook.backend.exceptions.reelException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ReelNotFoundException extends RuntimeException{
    public ReelNotFoundException(){
        super("Reel Not Found!!!");
    }
}
