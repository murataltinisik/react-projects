package com.facebook.backend.repositories;

import com.facebook.backend.entities.UserConfirmation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserConfirmationRepository extends JpaRepository<UserConfirmation, Long> {
    UserConfirmation findByUserId(long id);
}
