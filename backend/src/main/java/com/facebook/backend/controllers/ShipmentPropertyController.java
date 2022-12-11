package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.ShipmentPropertyRequestObject;
import com.facebook.backend.entities.ShipmentProperty;
import com.facebook.backend.services.IShipmentPropertyService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/shipment-property")
public class ShipmentPropertyController implements ICrudUtility<ShipmentProperty, ShipmentPropertyRequestObject> {
    @Autowired
    private IShipmentPropertyService service;

    @Override
    @PostMapping
    public ResponseEntity<ShipmentProperty> store(@RequestBody ShipmentPropertyRequestObject o) {
        try {
            ShipmentProperty property = new ShipmentProperty();

            property.setUser(o.getUser());
            property.setHide(o.getHide());
            property.setShipment(o.getShipment());
            property.setThirtyDaysBan(o.getThirtyDaysBan());
            property.setBlock(o.getBlock());
            property.setComplainant(o.getComplainant());

            return ResponseEntity.ok(service.save(property));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @PatchMapping(value = "{id}")
    public ResponseEntity<?> update(@PathVariable long id, @RequestBody ShipmentPropertyRequestObject o) throws ParseException {
        // SIMPLE DATE FORMAT
        SimpleDateFormat myFormat = new SimpleDateFormat("dd MM yyyy");
        SimpleDateFormat myFormat2 = new SimpleDateFormat("yyyy-MM-dd");

        try {
            // DATA
            Optional<ShipmentProperty> property = service.findById(id);

            // DATA -> DATE
            String dataDate1 = String.valueOf(property.get().getCreatedAt());
            String year = dataDate1.split(" ")[0].split("-")[0];
            String month = dataDate1.split(" ")[0].split("-")[1];
            String day = dataDate1.split(" ")[0].split("-")[2];
            String shipmentDate = day + " " + month + " " + year + " ";

            // 30 NEXT DAYS
            String next = dataDate1.split(" ")[0];
            Calendar c = Calendar.getInstance();
            c.setTime(myFormat2.parse(next));
            c.add(Calendar.DATE, property.get().getThirtyDaysBan());
            next = myFormat2.format(c.getTime());
            String nextDate30 = next.split("-")[2] + " " + next.split("-")[1] + " " + next.split("-")[0];

            // DATE -> DIFFERENCE
            Date date1 = myFormat.parse(shipmentDate);
            Date date2 = myFormat.parse(nextDate30);
            long diff = date2.getTime() - date1.getTime();

            if(TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS) == 0){
                service.deleteById(id);
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void destroy(long id) {}

    @Override
    public ResponseEntity<?> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<List<ShipmentProperty>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }
}
