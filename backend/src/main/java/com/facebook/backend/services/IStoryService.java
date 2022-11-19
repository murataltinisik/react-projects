package com.facebook.backend.services;

import com.facebook.backend.entities.Story;
import com.facebook.backend.repositories.IStoryRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface IStoryService extends IStoryRepository {
    @Override
    ArrayList<Story> findByUserId(long id);

    @Override
    Integer countByUserId(long id);
}
