package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.User;

import java.util.HashMap;

public class TagOfProfileRequestObject {
    private long id;
    private User user;
    private String biography;
    private HashMap<String, String> details;
    private HashMap<Integer, String> hobbies;
    private String subtraction;

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

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public HashMap<String, String> getDetails() {
        return details;
    }

    public void setDetails(HashMap<String, String> details) {
        this.details = details;
    }

    public HashMap<Integer, String> getHobbies() {
        return hobbies;
    }

    public void setHobbies(HashMap<Integer, String> hobbies) {
        this.hobbies = hobbies;
    }

    public String getSubtraction() {
        return subtraction;
    }

    public void setSubtraction(String subtraction) {
        this.subtraction = subtraction;
    }
}
