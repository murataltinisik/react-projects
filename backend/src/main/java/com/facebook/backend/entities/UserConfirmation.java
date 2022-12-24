package com.facebook.backend.entities;

import com.facebook.backend.utilities.AuditModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.swing.*;

@Entity
@Table(name = "user_confirmation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserConfirmation extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @Column(name = "code")
    private String code;
}
