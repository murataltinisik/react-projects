package com.facebook.backend.services;

import com.facebook.backend.entities.Shipment;
import com.facebook.backend.repositories.IShipmentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public interface IShipmentService extends IShipmentRepository {
    @Override
    ArrayList<Shipment> findByDeletedAtNull();

    @Override
    long countByDeletedAtNull();

    @Override
    Optional<Shipment> findByIdAndDeletedAtNull(long id);

    @Override
    ArrayList<Shipment> findByUserIdAndDeletedAtNull(long userId);

    @Override
    long countByUserIdAndDeletedAtNull(long userId);
}
