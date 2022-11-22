package com.facebook.backend.utilities;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component("passwordHashing")
public class PasswordHashing {

    private BCryptPasswordEncoder crypt;

    public PasswordHashing(){
        crypt = new BCryptPasswordEncoder();
    }

    public String encoder(String password){
        return crypt.encode(password);
    }

   public boolean decoder(String password, String hash){
        return crypt.matches(password, hash);
   }

}
