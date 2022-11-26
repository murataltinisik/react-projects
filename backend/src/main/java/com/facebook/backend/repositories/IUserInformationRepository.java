package com.facebook.backend.repositories;

import com.facebook.backend.entities.UserInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserInformationRepository extends JpaRepository<UserInformation, Long> {
    Optional<UserInformation> findByUserId(long id);
}
