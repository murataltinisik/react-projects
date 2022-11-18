package com.facebook.backend.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "answer_of_comment")
public class AnswerOfComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "answer", length = 120)
    private String answer;

    @ManyToOne
    private User user;
}
