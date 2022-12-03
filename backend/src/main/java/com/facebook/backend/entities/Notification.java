package com.facebook.backend.entities;

import com.facebook.backend.utilities.AuditModel;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "notifications")
public class Notification extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private User reported;

    @Column(name = "isseen")
    private int isSeen;

    public Notification(){}

    public Notification(User user, User reported, int seen, Date createdDate){
        this.user = user;
        this.reported = reported;
        this.isSeen = seen;
        this.setCreatedAt(createdDate);
    }

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

    public User getReported() {
        return reported;
    }

    public void setReported(User reported) {
        this.reported = reported;
    }

    public int getIsSeen() {
        return isSeen;
    }

    public void setIsSeen(int isSeen) {
        this.isSeen = isSeen;
    }
}
