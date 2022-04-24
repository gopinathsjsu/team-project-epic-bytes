package com.hotelbooking.validators;

import com.hotelbooking.exception.HotelExceptions;
import com.hotelbooking.models.request.BookingRequest;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Component
public class DateValidator {

  public void validateDate(BookingRequest bookingRequest) {
    LocalDate checkInDate = bookingRequest.getCheckInDate();
    LocalDate checkOutDate = bookingRequest.getCheckOutDate();
    long totalNights = ChronoUnit.DAYS.between(checkInDate, checkOutDate);

    if (checkInDate == null) {
      throw new HotelExceptions("Missing check in date");
    } else if (checkOutDate == null) {
      throw new HotelExceptions("Missing check out date");
    } else if (checkInDate.isBefore(LocalDate.now())) {
      throw new HotelExceptions("Check in date must be in the future");
    } else if (checkOutDate.isBefore(checkInDate)) {
      throw new HotelExceptions("Check out date must occur after check in date");
    } else if (totalNights < 1) {
      throw new HotelExceptions("Reservation must be for at least 1 night");
    } else if (totalNights > 7)
      throw new HotelExceptions("Reservation can be for at most 7 nights");
  }
}
