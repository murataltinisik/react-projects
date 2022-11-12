package com.facebook.backend.services;

import com.facebook.backend.entities.User;
import com.facebook.backend.repositories.IUserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface IUserService extends IUserRepository {

    @Override
    ArrayList<User> findByDeletedAtNull();

    @Override
    User findByEmailPhone(String emailPhone);

    @Override
    long countByDeletedAtNull();

    @Override
    long countByUsernameOrEmailPhone(String username, String emailPhone);
}
