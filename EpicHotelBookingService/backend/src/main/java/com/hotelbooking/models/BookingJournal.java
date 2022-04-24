package com.hotelbooking.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class BookingJournal {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @Column private String username;
  @Column private String customerName;
  @Column private Integer hotelID;
  @Column private String roomType;
  @Column private int numberOfRooms;
  @Column private int numberOfGuestsPerRoom;
  @Column private LocalDate checkInDate;
  @Column private LocalDate checkOutDate;
  @Column private double price;
  @Column private Integer rewardPoints;
  @Column private String email;
  @Column private String phone;
  @Column private LocalDateTime localDateTime;

  public BookingJournal(
      String username,
      String customerName,
      Integer hotelID,
      String roomType,
      int numberOfRooms,
      int numberOfGuestsPerRoom,
      LocalDate checkInDate,
      LocalDate checkOutDate,
      double price,
      Integer rewardPoints,
      String email,
      String phone,
      LocalDateTime localDateTime) {
    this.username = username;
    this.customerName = customerName;
    this.hotelID = hotelID;
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
}
