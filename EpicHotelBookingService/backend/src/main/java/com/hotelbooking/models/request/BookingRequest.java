package com.hotelbooking.models.request;
import com.hotelbooking.models.Amenity;
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
  private Integer hotelID;
  @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE)
  private String email;
  private String phone;
  private int numberOfGuestsPerRoom;
  private int numberOfRooms;
  private String roomType;
  private LocalDate checkInDate;
  private LocalDate checkOutDate;
  public Map<String, Integer> amenitiesMap;


}
