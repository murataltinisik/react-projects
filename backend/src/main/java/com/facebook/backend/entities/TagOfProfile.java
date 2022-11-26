package com.facebook.backend.entities;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "tags_of_profiles")
public class TagOfProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    private User user;

    @Column(name = "biography", length = 100)
    private String biography;

    @Column(name = "details")
    private HashMap<String, String> details;

    @Column(name = "hobbies")
    private HashMap<Integer, String> hobbies;

    @Column(name = "subtraction")
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
