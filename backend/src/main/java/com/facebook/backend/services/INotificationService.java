package com.facebook.backend.services;

import com.facebook.backend.entities.Notification;
import com.facebook.backend.repositories.INotificationRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface INotificationService extends INotificationRepository {
    @Override
    ArrayList<Notification> findByUserId(long id);

    @Override
    long countByUserId(long id);

    @Override
    ArrayList<Notification> findByUserIdAndIsSeen(long id, int seen);

    @Override
    ArrayList<Notification> findAllOrderByIdLimit5(long id);
}
