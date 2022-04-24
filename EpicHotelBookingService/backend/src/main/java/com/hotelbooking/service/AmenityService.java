package com.hotelbooking.service;

import com.hotelbooking.models.Amenity;
import com.hotelbooking.repository.AmenityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmenityService {
  private AmenityRepository amenityRepository;

  public AmenityService(AmenityRepository amenityRepository) {
    this.amenityRepository = amenityRepository;
  }

  public void addAmenity(Amenity amenity) {
    amenityRepository.save(amenity);
  }

  public List<Amenity> getAllAmenities() {
    return (List<Amenity>) amenityRepository.findAll();
  }
}
