package com.facebook.backend.repositories;

import com.facebook.backend.entities.ChatNotification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface IChatNotificationRepository extends JpaRepository<ChatNotification, Long> {
    ArrayList<ChatNotification> findByUserId(long id);

    ArrayList<ChatNotification> findByUserIdAndSeenEquals(long id, int seen);

    int countByUserId(long id);
}
