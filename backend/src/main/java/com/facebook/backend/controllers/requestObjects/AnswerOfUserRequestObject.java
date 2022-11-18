package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.User;

public class AnswerOfUserRequestObject {
    private long id;
    private String answer;
    private User user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
