package com.facebook.backend.repositories;

import com.facebook.backend.entities.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface IStoryRepository extends JpaRepository<Story, Long> {
    ArrayList<Story> findByUserId(long id);

    Integer countByUserId(long id);
}
