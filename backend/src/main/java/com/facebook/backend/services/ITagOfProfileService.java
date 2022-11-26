package com.facebook.backend.services;

import com.facebook.backend.entities.TagOfProfile;
import com.facebook.backend.repositories.ITagOfProfileRepository;
import org.springframework.stereotype.Service;

@Service
public interface ITagOfProfileService extends ITagOfProfileRepository {
    @Override
    TagOfProfile findByUserId(long id);

    @Override
    Integer countByUserId(long id);
}
