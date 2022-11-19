package com.facebook.backend.repositories;

import com.facebook.backend.entities.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface IShipmentRepository extends JpaRepository<Shipment, Long> {
    ArrayList<Shipment> findByDeletedAtNull();

    long countByDeletedAtNull();

    Optional<Shipment> findByIdAndDeletedAtNull(long id);

    ArrayList<Shipment> findByUserIdAndDeletedAtNull(long userId);

    long countByUserIdAndDeletedAtNull(long userId);
}
