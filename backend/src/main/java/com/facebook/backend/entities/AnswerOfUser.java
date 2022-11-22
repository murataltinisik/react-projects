package com.facebook.backend.entities;

import javax.persistence.*;

@Entity
@Table(name = "answer_of_user")
public class AnswerOfUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "answer", length = 120)
    private String answer;

    @ManyToOne
    private User user;

    public AnswerOfUser(){}

    public AnswerOfUser(String answer, User user) {
        this.answer = answer;
        this.user = user;
    }

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
