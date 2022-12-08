package com.facebook.backend.repositories;

import com.facebook.backend.entities.SecurityAndLoginSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecurityAndLoginSettingRepository extends JpaRepository<SecurityAndLoginSetting, Long> {}
