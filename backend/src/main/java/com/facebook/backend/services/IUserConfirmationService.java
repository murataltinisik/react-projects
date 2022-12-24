package com.facebook.backend.services;

import com.facebook.backend.entities.UserConfirmation;
import com.facebook.backend.repositories.IUserConfirmationRepository;
import org.springframework.stereotype.Service;

@Service
public interface IUserConfirmationService extends IUserConfirmationRepository {
    @Override
    UserConfirmation findByUserId(long id);
}
