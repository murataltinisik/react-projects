package com.facebook.backend.services;

import com.facebook.backend.entities.SavedPost;
import com.facebook.backend.repositories.ISavedPostRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface ISavedPostService extends ISavedPostRepository {
    @Override
    ArrayList<SavedPost> findByUserId(long id);

    @Override
    ArrayList<SavedPost> findByShipmentId(long id);
}
