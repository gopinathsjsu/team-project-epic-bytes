package com.hotelbooking.models;

import lombok.*;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Hotel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @Column
  private String hotelName;

  @Column
  private String description;

  @Column
  private String location;

  @Column
  private String hotelAddress;

  @Column
  private String hotelEmail;

  @Column
  private String hotelPhone;
}
