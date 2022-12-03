package com.facebook.backend.services;

import com.facebook.backend.enums.ReelDetailType;
import com.facebook.backend.repositories.IReelDetailRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IReelDetailService extends IReelDetailRepository {
    @Override
    long countByReelIdAndType(long id, ReelDetailType type);

    @Override
    List<Object> findAllDetailsOfReel(long id);
}
