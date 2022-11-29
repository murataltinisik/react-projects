package com.facebook.backend.entities;

import com.facebook.backend.utilities.AuditModel;

import javax.persistence.*;

@Entity
@Table(name = "chat_notifications")
public class ChatNotification extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private User fromWho;

    @Column(name = "message")
    private String message;

    @Column(name = "seen")
    private int seen;

    public ChatNotification(){
        super();
    }

    public ChatNotification(User user, User fromWho, String message) {
        this.user = user;
        this.fromWho = fromWho;
        this.message = message;
    }

    public ChatNotification(User user, User fromWho, String message, int seen) {
        this.user = user;
        this.fromWho = fromWho;
        this.message = message;
        this.seen = seen;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getFromWho() {
        return fromWho;
    }

    public void setFromWho(User fromWho) {
        this.fromWho = fromWho;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getSeen() {
        return seen;
    }

    public void setSeen(int seen) {
        this.seen = seen;
    }
}
