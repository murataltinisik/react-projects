package com.facebook.backend.repositories;

import com.facebook.backend.entities.SearchResultsOfUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ISearchResultsOfUserRepository extends JpaRepository<SearchResultsOfUser, Long> {
    ArrayList<SearchResultsOfUser> findByUserId(long id);

    Long countByUserId(long id);
}