package com.facebook.backend.repositories;

import com.facebook.backend.entities.AnswerOfUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAnswerOfUserRepository extends JpaRepository<AnswerOfUser, Long> {}
