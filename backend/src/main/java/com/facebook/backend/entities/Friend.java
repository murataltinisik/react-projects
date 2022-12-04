package com.facebook.backend.entities;

import com.facebook.backend.utilities.AuditModel;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "friends")
public class Friend extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private User friend;

    public Friend(){}

    public Friend(User user, User friend, Date createdAt){
        this.user = user;
        this.friend = friend;
        this.setCreatedAt(createdAt);
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

    public User getFriend() {
        return friend;
    }

    public void setFriend(User friend) {
        this.friend = friend;
    }
}
