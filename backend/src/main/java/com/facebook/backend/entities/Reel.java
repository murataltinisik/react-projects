package com.facebook.backend.entities;

import com.facebook.backend.utilities.AuditModel;

import javax.persistence.*;

@Entity
@Table(name = "reels")
public class Reel extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @Lob
    private String source;

    @Column(name = "description")
    private String description;

    public Reel(){}

    public Reel(User user, String source, String description){
        this.user = user;
        this.source = source;
        this.description = description;
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

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
