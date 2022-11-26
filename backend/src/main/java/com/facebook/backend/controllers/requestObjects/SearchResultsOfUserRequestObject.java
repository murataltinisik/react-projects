package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.User;

public class SearchResultsOfUserRequestObject {
    private long id;
    private User user;
    private String wanted;

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

    public String getWanted() {
        return wanted;
    }

    public void setWanted(String wanted) {
        this.wanted = wanted;
    }
}
