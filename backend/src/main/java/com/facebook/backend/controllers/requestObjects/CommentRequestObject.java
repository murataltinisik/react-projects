package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.AnswerOfUser;
import com.facebook.backend.entities.Shipment;
import com.facebook.backend.entities.User;

public class CommentRequestObject {

    private long id;
    private String message;
    private User user;
    private Shipment shipment;
    private AnswerOfUser answer;
    private String createdAt;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Shipment getShipment() {
        return shipment;
    }

    public void setShipment(Shipment shipment) {
        this.shipment = shipment;
    }

    public AnswerOfUser getAnswer() {
        return answer;
    }

    public void setAnswer(AnswerOfUser answer) {
        this.answer = answer;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
