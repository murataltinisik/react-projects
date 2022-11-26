package com.facebook.backend.services;

import com.facebook.backend.entities.SearchResultsOfUser;
import com.facebook.backend.repositories.ISearchResultsOfUserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface ISearchResultsOfUserService extends ISearchResultsOfUserRepository {
    @Override
    ArrayList<SearchResultsOfUser> findByUserId(long id);

    @Override
    Long countByUserId(long id);
}
