package com.facebook.backend.entities;

import com.facebook.backend.utilities.AuditModel;

import javax.persistence.*;

@Entity
@Table(name = "shipments")
public class Shipment extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private User user;

    @Column(name = "image")
    private String image;

    @Column(name = "message", length = 200)
    private String message;

    @Column(name = "description", length = 120, nullable = true)
    private String description;

    @Column(name = "style_bg")
    private String styleBg;

    @Column(name = "tag_user_id")
    private long tagUserId;

    @Column(name = "deleted_at")
    private String deletedAt;

    public Shipment(){
        super();
    }

    public Shipment(String image, String message, String description, String styleBg, long tagUserId, User user) {
        this.image = image;
        this.message = message;
        this.description = description;
        this.styleBg = styleBg;
        this.tagUserId = tagUserId;
        this.user = user;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getMessage() {
        return message;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStyleBg() {
        return styleBg;
    }

    public void setStyleBg(String styleBg) {
        this.styleBg = styleBg;
    }

    public long getTagUserId() {
        return tagUserId;
    }

    public void setTagUserId(long tagUserId) {
        this.tagUserId = tagUserId;
    }

    public String getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(String deletedAt) {
        this.deletedAt = deletedAt;
    }
}
