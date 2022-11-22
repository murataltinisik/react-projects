package com.facebook.backend.repositories;

import com.facebook.backend.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByShipmentId(long shipmentId);
}
