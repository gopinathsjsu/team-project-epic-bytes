package com.hotelbooking.controller;

import com.hotelbooking.models.Hotel;
import com.hotelbooking.service.HotelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class HotelController {

    private final HotelService hotelService;

    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @PostMapping("/hotels")
    public void addHotel(@RequestBody Hotel hotel) {

        hotelService.addHotel(hotel);
    }

    @GetMapping("/hotels")
    public List<Hotel> searchHotel(@RequestParam(required = false) String location) throws Exception {
        if (location != null) {
            return hotelService.searchHotelByLocation(location);
        }
        else {
            return hotelService.getAllHotels();
        }
    }

    @GetMapping("/hotels/{id}")
    public Optional<Hotel> getHotelById(@PathVariable Integer id)  {
        return hotelService.getHotelById(id);
        }

    @PutMapping("/hotels/{id}")
        public void updateHotelDetails(@RequestBody Hotel hotel, @PathVariable Integer id) {
        hotelService.updateHotelDetails(hotel, id);
    }

    @DeleteMapping("/hotels/{id}")
    public void deleteHotel(@PathVariable Integer id) {
        hotelService.deleteHotel(id);
    }
}
