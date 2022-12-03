package com.facebook.backend.repositories;

import com.facebook.backend.entities.ReelDetail;
import com.facebook.backend.enums.ReelDetailType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReelDetailRepository extends JpaRepository<ReelDetail, Long> {
    long countByReelIdAndType(long id, ReelDetailType type);

    @Query(
            value = "SELECT COUNT(type), type FROM reel_details WHERE reel_id=:id GROUP BY type",
            nativeQuery = true
    )
    List<Object> findAllDetailsOfReel(@Param("id") long id);
}
