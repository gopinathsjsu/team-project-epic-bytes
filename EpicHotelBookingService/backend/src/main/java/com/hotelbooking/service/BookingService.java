package com.hotelbooking.service;

import com.hotelbooking.exception.HotelExceptions;
import com.hotelbooking.models.BookingJournal;
import com.hotelbooking.models.Room;
import com.hotelbooking.models.User;
import com.hotelbooking.models.request.BookingRequest;
import com.hotelbooking.models.response.BookingResponse;
import com.hotelbooking.repository.BookingRepository;
import com.hotelbooking.service.util.ResponseBuilder;
import com.hotelbooking.validators.DateValidator;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookingService {

  private BookingRepository bookingRepository;
  private RoomService roomService;
  private MyUserDetailsService myUserDetailsService;
  private DateValidator dateValidator;
  private ResponseBuilder responseBuilder;

  public BookingService(
      BookingRepository bookingRepository,
      RoomService roomService,
      MyUserDetailsService myUserDetailsService,
      DateValidator dateValidator,
      ResponseBuilder responseBuilder) {
    this.bookingRepository = bookingRepository;
    this.roomService = roomService;
    this.myUserDetailsService = myUserDetailsService;
    this.dateValidator = dateValidator;
    this.responseBuilder = responseBuilder;
  }

  public BookingResponse createBooking(BookingRequest bookingRequest, String username) {
    LocalDate checkInDate =
        Instant.ofEpochMilli(bookingRequest.getCheckInDate())
            .atZone(ZoneId.systemDefault())
            .toLocalDate();
    LocalDate checkOutDate =
        Instant.ofEpochMilli(bookingRequest.getCheckOutDate())
            .atZone(ZoneId.systemDefault())
            .toLocalDate();
    dateValidator.validateDate(checkInDate, checkOutDate);
    Optional<User> user = myUserDetailsService.getUserByUsername(username);
    user.orElseThrow(() -> new UsernameNotFoundException("No user found"));
    Optional<Room> room = roomService.getRoomById(bookingRequest.getRoomId());
    room.orElseThrow(() -> new UsernameNotFoundException("No room found"));

    BookingResponse br =
        responseBuilder.getBookingResponse(
            bookingRequest, room.get(), user.get(), checkInDate, checkOutDate);
    if (bookingRequest.isPayment()) {
      int rewardPoints = (int) br.getTotalPrice();
     responseBuilder.completeBooking(br, bookingRequest, room.get(), user.get(), checkInDate, checkOutDate);
      bookingRepository.save(
          new BookingJournal(
              UUID.randomUUID(),
              username,
              bookingRequest.getHotelId(),
              bookingRequest.getRoomId(),
              bookingRequest.getNumberOfRooms(),
              bookingRequest.getNumberOfGuestsPerRoom(),
              checkInDate,
              checkOutDate,
              br.getTotalPrice(),
              rewardPoints,
              bookingRequest.getEmail(),
              bookingRequest.getPhone(),
              LocalDateTime.now()));
      // reward and tier update after booking
      System.out.println("============user reward point before booking" + user.get().getRewardPoints());
      System.out.println("user tier point before booking" + user.get().getTier());
      user.get().setRewardPoints(user.get().getRewardPoints() + rewardPoints);
      System.out.println("user reward point after booking" + user.get().getRewardPoints());
      user.get().setTier(user.get().getRewardPoints());
      System.out.println("user tier  after booking==========" + user.get().getTier());

    }

    return br;
  }

  public List<BookingJournal> getAllBookings() {
    return (List<BookingJournal>) bookingRepository.findAll();
  }

  public Optional<BookingJournal> getBookingById(Integer bookingID) {
    return bookingRepository.findById(bookingID);
  }

  public void updateBookingDetails(BookingJournal bookingJournal, Integer bookingID) {

    dateValidator.validateDate(bookingJournal.getCheckInDate(), bookingJournal.getCheckOutDate());

    Optional<BookingJournal> updateBooking = getBookingById(bookingID);
    updateBooking.orElseThrow((() -> new HotelExceptions("No booking found")));
    //updateRequestBuilder(updatedetails, bookingDetails);
    //return new ResponseEntity<BookingDetails>(bookingRepository.save(updatedetails), HttpStatus.OK);
    }

  public void cancelBooking(Integer bookingID) {
    bookingRepository.deleteById(bookingID);
  }

  public Optional<List<BookingJournal>> getBookingsForUser(String username) {
    return bookingRepository.getBookingsForUser(username);
  }
}
