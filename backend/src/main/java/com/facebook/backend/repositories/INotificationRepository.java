package com.facebook.backend.repositories;

import com.facebook.backend.entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface INotificationRepository extends JpaRepository<Notification, Long> {
    ArrayList<Notification> findByUserId(long id);

    long countByUserId(long id);

    ArrayList<Notification> findByUserIdAndIsSeen(long id, int seen);

    @Query(
            value = "SELECT * FROM notifications WHERE user_id=:id ORDER BY id DESC LIMIT 5",
            nativeQuery = true
    )
    ArrayList<Notification> findAllOrderByIdLimit5(@Param("id") long id);
}
