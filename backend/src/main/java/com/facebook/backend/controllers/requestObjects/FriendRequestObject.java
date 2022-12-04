package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.User;

public class FriendRequestObject {
    private long id;
    private User user;
    private User friend;

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

    public User getFriend() {
        return friend;
    }

    public void setFriend(User friend) {
        this.friend = friend;
    }
}
