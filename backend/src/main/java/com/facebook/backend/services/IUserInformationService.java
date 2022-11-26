package com.facebook.backend.services;

import com.facebook.backend.entities.UserInformation;
import com.facebook.backend.repositories.IUserInformationRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface IUserInformationService extends IUserInformationRepository {
    @Override
    Optional<UserInformation> findByUserId(long id);
}
