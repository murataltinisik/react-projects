package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserConfirmationRequestObject {
    private long id;
    private User user;
    private String code;
}
