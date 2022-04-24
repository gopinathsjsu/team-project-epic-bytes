package com.hotelbooking.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Amenity implements Serializable {

  /**
   * Options may be selected for each room for one or more amenities:
   * Daily Continental Breakfast
   * Access to fitness room
   * Access to Swimming Pool/Jacuzzi
   * Daily Parking
   * All meals included (Breakfast, Lunch, Dinner)
   */
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;
  @Column
  private String name;
  @Column
  private String description;
  @Column
  private double price;

}
