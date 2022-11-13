package com.facebook.backend.repositories;

import com.facebook.backend.entities.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface IShipmentRepository extends JpaRepository<Shipment, Long> {
    ArrayList<Shipment> findByDeletedAtNull();

    long countByDeletedAtNull();

    ArrayList<Shipment> findByUserId(long userId);

    long countByUserId(long userId);
}
