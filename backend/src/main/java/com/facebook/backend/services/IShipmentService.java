package com.facebook.backend.services;

import com.facebook.backend.entities.Shipment;
import com.facebook.backend.repositories.IShipmentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface IShipmentService extends IShipmentRepository {
    @Override
    ArrayList<Shipment> findByDeletedAtNull();

    @Override
    long countByDeletedAtNull();

    @Override
    ArrayList<Shipment> findByUserId(long userId);

    @Override
    long countByUserId(long userId);
}
