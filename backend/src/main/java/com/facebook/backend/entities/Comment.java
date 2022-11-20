package com.facebook.backend.entities;

import javax.persistence.*;
import java.net.spi.URLStreamHandlerProvider;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "message", length = 120)
    private String message;

    @ManyToOne
    private User user;

    @ManyToOne
    private Shipment shipment;

    @ManyToOne
    private AnswerOfUser answer;

    @Column(name = "created_at")
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
