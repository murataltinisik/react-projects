package com.facebook.backend.entities;

import com.facebook.backend.enums.Complainant;
import com.facebook.backend.utilities.AuditModel;

import javax.persistence.*;

@Entity
@Table(name = "property_shipments")
public class ShipmentProperty extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Shipment shipment;

    @Column(name = "hide")
    private int hide;

    @Column(name = "thirty_days_ban")
    private int thirtyDaysBan;

    @Column(name = "block")
    private int block;

    @Column(name = "complainant")
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
