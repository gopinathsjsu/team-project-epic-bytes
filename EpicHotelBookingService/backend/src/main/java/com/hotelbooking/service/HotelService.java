package com.hotelbooking.service;

import com.hotelbooking.models.Hotel;
import com.hotelbooking.models.request.BookingRequest;
import com.hotelbooking.models.request.BookingResponse;
import com.hotelbooking.repository.HotelRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelService {

  private final HotelRepository hotelRepository;

  public HotelService(HotelRepository hotelRepository) {
    this.hotelRepository = hotelRepository;
  }

  public List<Hotel> searchHotelByLocation(String location) throws Exception {
    Optional<List<Hotel>> hotelList = hotelRepository.getHotels(location);
    hotelList.orElseThrow(() -> new UsernameNotFoundException("No hotels found for: " + location));
    return hotelList.get();
  }

  public List<Hotel> getAllHotels() {
    return (List<Hotel>) hotelRepository.findAll();
  }

  public Optional<Hotel> getHotelById(Integer id) {
    return hotelRepository.findById(id);
  }

  public void updateHotelDetails(Hotel hotel, Integer id) {
    Hotel currentHotel = hotelRepository.findById(id).orElseThrow(RuntimeException::new);
    currentHotel.setHotelName(hotel.getHotelName());
    currentHotel.setLocation(hotel.getLocation());
    currentHotel.setHotelAddress(hotel.getHotelAddress());
    currentHotel.setHotelEmail(hotel.getHotelEmail());
    currentHotel.setHotelPhone(hotel.getHotelPhone());
    currentHotel = hotelRepository.save(hotel);
  }


  public void deleteHotel(Integer id) {
    hotelRepository.deleteById(id);
  }

  public void addHotel(Hotel hotel) {
    hotelRepository.save(hotel);
  }

  public BookingResponse createBooking(BookingRequest bookingRequest) {

    return null;
  }
}