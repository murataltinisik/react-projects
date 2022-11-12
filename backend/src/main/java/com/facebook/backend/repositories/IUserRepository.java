package com.facebook.backend.repositories;

import com.facebook.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    ArrayList<User> findByDeletedAtNull();

    User findByEmailPhone(String emailPhone);

    long countByDeletedAtNull();

    long countByUsernameOrEmailPhone(String username, String emailPhone);
}
