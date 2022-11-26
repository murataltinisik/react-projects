package com.facebook.backend.entities;

import javax.persistence.*;

@Entity
@Table(name = "search_results_of_users")
public class SearchResultsOfUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @Column(name = "wanted", length = 60)
    private String wanted;

    public SearchResultsOfUser(){}

    public SearchResultsOfUser(User user, String wanted) {
        this.user = user;
        this.wanted = wanted;
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

    public String getWanted() {
        return wanted;
    }

    public void setWanted(String wanted) {
        this.wanted = wanted;
    }
}
