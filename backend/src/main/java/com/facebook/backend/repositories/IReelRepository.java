package com.facebook.backend.repositories;

import com.facebook.backend.entities.Reel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface IReelRepository extends JpaRepository<Reel, Long> {
    @Query(
        value = "SELECT * FROM reels ORDER BY id DESC LIMIT 7",
        nativeQuery = true
    )
    ArrayList<Reel> findAllOrderByIdLimit7();
}
