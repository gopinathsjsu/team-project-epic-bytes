package com.hotelbooking.controller;

import com.hotelbooking.models.Amenity;
import com.hotelbooking.service.AmenityService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
