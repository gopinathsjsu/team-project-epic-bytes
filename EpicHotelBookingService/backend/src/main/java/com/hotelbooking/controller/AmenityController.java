package com.hotelbooking.controller;

import com.hotelbooking.models.Amenity;
import com.hotelbooking.models.Room;
import com.hotelbooking.service.AmenityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AmenityController {

    private final AmenityService amenityService;

    public AmenityController(AmenityService amenityService) {
        this.amenityService = amenityService;
    }

    @PostMapping("/amenities")
    public void addAmenity(@RequestBody Amenity amenity) {
        amenityService.addAmenity(amenity);
    }

    @GetMapping("/amenities")
    public List<Amenity> getAllAmenities() {
        return amenityService.getAllAmenities();
    }

    @GetMapping("/amenities/{id}")
    public Optional<Amenity> getAmenityById(@PathVariable String name)  {
        return amenityService.getAmenityById(name);
    }
}
