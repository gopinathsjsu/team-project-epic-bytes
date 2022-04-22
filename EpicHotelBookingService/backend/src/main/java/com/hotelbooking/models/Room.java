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
public class Room implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column
  private Integer roomNumber;

  @Column
  private String roomType;

  @Column
  private double perNightPrice;

  @Column
  private int beds;

  @Column
  private double extraGuestPrice;

}
