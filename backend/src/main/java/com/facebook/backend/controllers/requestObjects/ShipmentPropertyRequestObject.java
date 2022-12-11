package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.Shipment;
import com.facebook.backend.entities.User;
import com.facebook.backend.enums.Complainant;

public class ShipmentPropertyRequestObject {
    private long id;
    private User user;
    private Shipment shipment;
    private int hide;
    private int thirtyDaysBan;
    private int block;
    private Complainant complainant;

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

    public int getHide() {
        return hide;
    }

    public void setHide(int hide) {
        this.hide = hide;
    }

    public int getThirtyDaysBan() {
        return thirtyDaysBan;
    }

    public void setThirtyDaysBan(int thirtyDaysBan) {
        this.thirtyDaysBan = thirtyDaysBan;
    }

    public int getBlock() {
        return block;
    }

    public void setBlock(int block) {
        this.block = block;
    }

    public Complainant getComplainant() {
        return complainant;
    }

    public void setComplainant(Complainant complainant) {
        this.complainant = complainant;
    }
}
