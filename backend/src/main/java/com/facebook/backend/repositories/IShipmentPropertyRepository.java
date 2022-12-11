package com.facebook.backend.repositories;

import com.facebook.backend.entities.ShipmentProperty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IShipmentPropertyRepository extends JpaRepository<ShipmentProperty, Long> {}
