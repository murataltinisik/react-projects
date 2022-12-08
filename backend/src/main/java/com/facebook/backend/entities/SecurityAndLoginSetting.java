package com.facebook.backend.entities;

import javax.persistence.*;

@Entity
@Table(name = "sercurity_login_settings")
public class SecurityAndLoginSetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

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
}
