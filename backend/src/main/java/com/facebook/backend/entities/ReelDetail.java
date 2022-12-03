package com.facebook.backend.entities;

import com.facebook.backend.enums.ReelDetailType;

import javax.persistence.*;

@Entity
@Table(name = "reel_details")
public class ReelDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private Reel reel;

    @ManyToOne
    private User user;

    @Column(name = "type")
    private ReelDetailType type;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Reel getReel() {
        return reel;
    }

    public void setReel(Reel reel) {
        this.reel = reel;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ReelDetailType getType() {
        return type;
    }

    public void setType(ReelDetailType type) {
        this.type = type;
    }
}
