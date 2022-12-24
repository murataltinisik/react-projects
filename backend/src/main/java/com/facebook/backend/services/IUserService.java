package com.facebook.backend.services;

import com.facebook.backend.entities.User;
import com.facebook.backend.repositories.IUserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public interface IUserService extends IUserRepository {


    @Override
    ArrayList<User> findByDeletedAtNull();

    @Override
    User findByEmailPhone(String emailPhone);

    @Override
    Optional<User> findByIdAndDeletedAtNull(long id);

    @Override
    long countByDeletedAtNull();

    @Override
    long countByUsernameOrEmailPhone(String username, String emailPhone);
}
