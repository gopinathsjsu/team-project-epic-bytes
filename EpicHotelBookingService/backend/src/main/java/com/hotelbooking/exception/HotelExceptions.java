package com.hotelbooking.exception;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class HotelExceptions extends RuntimeException {
  private String reason;
}
