package com.facebook.backend.repositories;

import com.facebook.backend.entities.Friend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface IFriendRepository extends JpaRepository<Friend, Long> {
    Optional<Friend> findByUserIdAndFriendId(long userId, long friendId);
    ArrayList<Friend> findByUserId(long id);
    Integer countByUserId(long id);
}
