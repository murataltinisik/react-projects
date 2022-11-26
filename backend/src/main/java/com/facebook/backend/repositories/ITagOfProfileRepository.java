package com.facebook.backend.repositories;

import com.facebook.backend.entities.TagOfProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITagOfProfileRepository extends JpaRepository<TagOfProfile, Long> {
    TagOfProfile findByUserId(long id);
    Integer countByUserId(long id);
}
