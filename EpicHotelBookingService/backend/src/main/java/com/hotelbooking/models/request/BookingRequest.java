package com.hotelbooking.models.request;
import lombok.*;
import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.Map;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {

  @NotBlank(message = "Name cannot be empty")
  private String customerName;
  private Integer hotelId;
  @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE)
  private String email;
  private String phone;
  @Size(min=1,max =6)
  private int numberOfGuestsPerRoom;
  @Size(min=1,max =10)
  private int numberOfRooms;
  private Integer roomId;
  @NotBlank(message = "Check-In date is mandatory")
  private long checkInDate;
  @NotBlank(message = "Check-Out date is mandatory")
  private long checkOutDate;
  public Map<String, Integer> amenitiesMap; // key: amenity name, value: count
  private boolean payment;

}
