package com.facebook.backend.entities;

import com.facebook.backend.enums.UserGender;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user_information")
public class UserInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    private User user;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "gender")
    private int gender;

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

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }
}
