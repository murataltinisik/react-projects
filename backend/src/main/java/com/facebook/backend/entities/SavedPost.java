package com.facebook.backend.entities;

import javax.persistence.*;

@Entity
@Table(name = "saved_posts")
public class SavedPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Shipment shipment;

    public SavedPost(){}

    public SavedPost(Shipment shipment) {
        this.shipment = shipment;
    }

    public SavedPost(User user, Shipment shipment) {
        this.user = user;
        this.shipment = shipment;
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

    public Shipment getShipment() {
        return shipment;
    }

    public void setShipment(Shipment shipment) {
        this.shipment = shipment;
    }
}
