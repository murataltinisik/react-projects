package com.facebook.backend.services;

import com.facebook.backend.entities.Friend;
import com.facebook.backend.repositories.IFriendRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public interface IFriendService extends IFriendRepository {
    @Override
    Optional<Friend> findByUserIdAndFriendId(long userId, long friendId);

    @Override
    ArrayList<Friend> findByUserId(long id);

    @Override
    Integer countByUserId(long id);
}
