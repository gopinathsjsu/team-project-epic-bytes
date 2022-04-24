package com.hotelbooking.service;

import com.hotelbooking.models.BookingJournal;
import com.hotelbooking.models.request.BookingRequest;
import com.hotelbooking.repository.BookingRepository;
import com.hotelbooking.service.util.PriceCalculator;
import com.hotelbooking.validators.DateValidator;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

  private BookingRepository bookingRepository;
  private DateValidator dateValidator;

  public BookingService(BookingRepository bookingRepository, DateValidator dateValidator) {
    this.bookingRepository = bookingRepository;
    this.dateValidator = dateValidator;
  }

  public void createBooking(BookingRequest bookingRequest, String username) {
    dateValidator.validateDate(bookingRequest);
    double price = PriceCalculator.calculateBookingPrice(bookingRequest);
    Integer rewardPoints = PriceCalculator.calculateRewardPoints(price);

    bookingRepository.save(new BookingJournal(username, bookingRequest.getCustomerName(),
            bookingRequest.getHotelID(),
            bookingRequest.getRoomType(),
            bookingRequest.getNumberOfRooms(),
            bookingRequest.getNumberOfGuestsPerRoom(),
            bookingRequest.getCheckInDate(),
            bookingRequest.getCheckOutDate(),
            price,
            rewardPoints,
            bookingRequest.getEmail(),
            bookingRequest.getPhone(),
            LocalDateTime.now()));

  }

  public List<BookingJournal> getAllBookings() {
    return (List<BookingJournal>) bookingRepository.findAll();
  }

  public Optional<BookingJournal> getBookingById(Integer bookingID) {
    return bookingRepository.findById(bookingID);
  }

  public void updateBookingDetails(BookingJournal bookingJournal, Integer bookingID) {}

  public void cancelBooking(Integer bookingID) {
    bookingRepository.deleteById(bookingID);
  }

  public Optional<List<BookingJournal>> getBookingsForUser(String username) {
    return bookingRepository.getBookingsForUser(username);
  }
}
