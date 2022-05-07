package com.hotelbooking.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class BookingJournal {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;
  @Column(unique = true)
  private UUID bookingId;
  @Column private String username;

  public BookingJournal(UUID bookingId, String username, Integer hotelId, String roomType, int numberOfRooms, int numberOfGuestsPerRoom, LocalDate checkInDate, LocalDate checkOutDate, double price, int rewardPoints, String email, String phone, LocalDateTime localDateTime) {
    this.bookingId = bookingId;
    this.username = username;
    this.hotelId = hotelId;
    this.roomType = roomType;
    this.numberOfRooms = numberOfRooms;
    this.numberOfGuestsPerRoom = numberOfGuestsPerRoom;
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
    this.price = price;
    this.rewardPoints = rewardPoints;
    this.email = email;
    this.phone = phone;
    this.localDateTime = localDateTime;
  }

  @Column private Integer hotelId;
  @Column private String roomType;
  @Column private int numberOfRooms;
  @Column private int numberOfGuestsPerRoom;
  @Column private LocalDate checkInDate;
  @Column private LocalDate checkOutDate;
  @Column private double price;
  @Column private int rewardPoints;
  @Column private String email;
  @Column private String phone;
  @Column private LocalDateTime localDateTime;
}
