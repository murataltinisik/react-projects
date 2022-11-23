package com.facebook.backend.repositories;

import com.facebook.backend.entities.SavedPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ISavedPostRepository extends JpaRepository<SavedPost, Long> {
    ArrayList<SavedPost> findByUserId(long id);

    ArrayList<SavedPost> findByShipmentId(long id);
}
