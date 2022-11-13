package com.facebook.backend.exceptions.shipmentException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ShipmentNotFoundException extends RuntimeException{
    public ShipmentNotFoundException(){
        super("Shipment Not Found!!!");
    }
}
