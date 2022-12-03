package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.Reel;
import com.facebook.backend.entities.User;
import com.facebook.backend.enums.ReelDetailType;

public class ReelDetailRequestObject {
    private long id;
    private Reel reel;
    private User user;
    private ReelDetailType type;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Reel getReel() {
        return reel;
    }

    public void setReel(Reel reel) {
        this.reel = reel;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ReelDetailType getType() {
        return type;
    }

    public void setType(ReelDetailType type) {
        this.type = type;
    }
}
