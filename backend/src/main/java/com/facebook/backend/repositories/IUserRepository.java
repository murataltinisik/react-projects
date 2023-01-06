package com.facebook.backend.repositories;

import com.facebook.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    ArrayList<User> findByDeletedAtNull();

    User findByEmailPhone(String emailPhone);

    Optional<User> findByIdAndDeletedAtNull(long id);

    long countByDeletedAtNull();

    long countByUsernameOrEmailPhone(String username, String emailPhone);

    long countByEmailPhone(String emailPhone);
}
