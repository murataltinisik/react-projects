package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.ShipmentRequestObject;
import com.facebook.backend.entities.Shipment;
import com.facebook.backend.entities.User;
import com.facebook.backend.exceptions.shipmentException.ShipmentNotFoundException;
import com.facebook.backend.exceptions.userException.UserNotFoundException;
import com.facebook.backend.services.IShipmentService;
import com.facebook.backend.services.IUserService;
import com.facebook.backend.utilities.CurrentTime;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/shipments")
public class ShipmentController implements ICrudUtility<Shipment, ShipmentRequestObject> {

    @Autowired
    private IShipmentService service;

    @Autowired
    private IUserService userService;

    @Override
    @PostMapping(name = "/")
    @CacheEvict(cacheNames = {"allShipments", "allShipmentsOfUser"}, allEntries = true)
    public ResponseEntity<Shipment> store(@RequestBody ShipmentRequestObject o) throws UserNotFoundException {
        try{
            if(userService.findByIdAndDeletedAtNull(o.getUser().getId()).isPresent()){
                Shipment shipment = new Shipment();
                shipment.setUser(o.getUser());
                shipment.setImage(o.getImage());
                shipment.setMessage(o.getMessage());
                shipment.setDescription(o.getDescription());
                shipment.setStyleBg(o.getStyleBg());
                shipment.setTagUserId(o.getTagUserId());
                shipment.setDeletedAt(o.getDeletedAt());
                return ResponseEntity.ok(service.save(shipment));
            }
            return null;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PutMapping(name = "/", value = "{id}")
    @CacheEvict(cacheNames = {"allShipments", "allShipmentsOfUser"}, allEntries = true)
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody ShipmentRequestObject o) {
        try{
            if(userService.findByIdAndDeletedAtNull(o.getUser().getId()).isPresent()){
                Optional<Shipment> shipment = service.findById(id);
                shipment.get().setUser(o.getUser());
                shipment.get().setImage(o.getImage());
                shipment.get().setMessage(o.getMessage());
                shipment.get().setStyleBg(o.getStyleBg());
                shipment.get().setTagUserId(o.getTagUserId());
                return ResponseEntity.ok(service.save(shipment.get()));
            }
            return null;
        }catch (UserNotFoundException e){
            throw e;
        }catch (ShipmentNotFoundException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @DeleteMapping(name = "/", value = "{id}")
    @CacheEvict(cacheNames = {"allShipments", "allShipmentsOfUser"}, allEntries = true)
    public void destroy(@PathVariable long id) {
        try{
            Optional<Shipment> shipment = service.findById(id);
            shipment.get().setDeletedAt(CurrentTime.currentTimeStamp());
            service.save(shipment.get());
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @GetMapping(name = "/", value = "{id}")
    public ResponseEntity<?> findById(@PathVariable long id) throws ShipmentNotFoundException {
        try {
            Optional<Shipment> shipment = service.findById(id);

            // SHIPMENT
            Shipment restrictedData = new Shipment();
            restrictedData.setImage(shipment.get().getImage());
            restrictedData.setMessage(shipment.get().getMessage());
            restrictedData.setDescription(shipment.get().getDescription());
            restrictedData.setStyleBg(shipment.get().getStyleBg());
            restrictedData.setCreatedAt(shipment.get().getCreatedAt());
            restrictedData.setTagUserId(shipment.get().getTagUserId());
            restrictedData.setUser(new User(shipment.get().getUser().getName(), shipment.get().getUser().getSurname()));

            // HATEOAS
            Link self = WebMvcLinkBuilder.linkTo(ShipmentController.class)
                    .slash(id).withSelfRel();
            Link create = WebMvcLinkBuilder.linkTo(ShipmentController.class)
                    .slash("").withRel("create");
            Link update = WebMvcLinkBuilder.linkTo(ShipmentController.class)
                    .slash(id).withRel("update");
            Link delete = WebMvcLinkBuilder.linkTo(ShipmentController.class)
                    .slash(id).withRel("delete");
            EntityModel<Shipment> resource = EntityModel.of(restrictedData, self, create, update, delete);

            return ResponseEntity.ok(resource);
        }catch (ShipmentNotFoundException e){
            return ResponseEntity.ok(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @Override
    @GetMapping(name = "/")
    @Cacheable("allShipments")
    public ResponseEntity<List<Shipment>> findAll() {
        ArrayList<Shipment> shipments = service.findByDeletedAtNull();
        if(shipments.size() > 0){
            ArrayList<Shipment> restrictedDatas = new ArrayList<>();

            for(Shipment shipment : shipments){
                Shipment restrictedData = new Shipment();

                restrictedData.setImage(shipment.getImage());
                restrictedData.setMessage(shipment.getMessage());
                restrictedData.setDescription(shipment.getDescription());
                restrictedData.setStyleBg(shipment.getStyleBg());
                restrictedData.setCreatedAt(shipment.getCreatedAt());
                restrictedData.setTagUserId(shipment.getTagUserId());
                restrictedData.setUser(new User(shipment.getUser().getName(), shipment.getUser().getSurname()));

                restrictedDatas.add(restrictedData);
            }

            return ResponseEntity.ok(restrictedDatas);
        }
        return null;
    }

    @Override
    @GetMapping(name = "/", value = "/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.countByDeletedAtNull());
    }

    @GetMapping(name = "/", value = "/user/{userId}")
    @Cacheable("allShipmentsOfUser")
    public ResponseEntity<ArrayList<Shipment>> theShipmentsOfUser(@PathVariable long userId){
        return ResponseEntity.ok(service.findByUserIdAndDeletedAtNull(userId));
    }

    @GetMapping(name = "/", value = "/count/{userId}")
    public ResponseEntity<Long> theCountOfUsersShipments(@PathVariable(name = "userId") long userId){
        return ResponseEntity.ok(service.countByUserIdAndDeletedAtNull(userId));
    }
}
