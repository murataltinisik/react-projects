package com.facebook.backend.repositories;

import com.facebook.backend.entities.GeneralAccountSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IGeneralAccountSettingRepository extends JpaRepository<GeneralAccountSetting, Long> {}
