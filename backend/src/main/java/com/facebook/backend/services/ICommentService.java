package com.facebook.backend.services;

import com.facebook.backend.entities.Comment;
import com.facebook.backend.repositories.ICommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ICommentService extends ICommentRepository {
    @Override
    List<Comment> findByShipmentId(long shipmentId);
}
