package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.User;

public class GeneralAccountSettingRequestObject {
    private long id;
    private User user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
