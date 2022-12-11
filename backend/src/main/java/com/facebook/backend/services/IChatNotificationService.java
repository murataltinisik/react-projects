package com.facebook.backend.services;

import com.facebook.backend.entities.ChatNotification;
import com.facebook.backend.repositories.IChatNotificationRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface IChatNotificationService extends IChatNotificationRepository {
    @Override
    ArrayList<ChatNotification> findByUserId(long id);

    @Override
    ArrayList<ChatNotification> findByUserIdAndSeenEquals(long id, int seen);

    @Override
    int countByUserId(long id);
}
