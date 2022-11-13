package com.facebook.backend.controllers.requestObjects;

import com.facebook.backend.entities.User;

public class ShipmentRequestObject {
    private long id;
    private User user;
    private String image;
    private String message;
    private String description;
    private String styleBg;
    private long tagUserId;
    private String createdAt;
    private String updatedAt;
    private String deletedAt;

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

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(String deletedAt) {
        this.deletedAt = deletedAt;
    }
}
