package com.hotelbooking.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.io.Serializable;

@Entity
@Table(indexes = {@Index(columnList = "email", unique = true)})
@Getter
@Setter
@ToString
@NoArgsConstructor
public class User implements Serializable {

  public User(
      String username,
      String password,
      String firstName,
      String lastName,
      String phone,
      String email,
      String role) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.role = role;
  }

  @Id
  @Column(length = 15)
  @NotBlank(message = "username is mandatory")
  private String username;

  @Column
  @NotBlank(message = "password is mandatory")
  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  private String password;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column
  @Pattern(regexp = "(^$|[0-9]{10})", message = "10 digits phone number required")
  private String phone;

  @Column(length = 32)
  @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE, message = "Email should be of type someone@example.com")
  private String email;

  @Column(name = "role")
  private String role;

  @Column private int rewardPoints;

  @Column(length = 32, columnDefinition = "varchar(32) default 'REGULAR'")
  @Enumerated(value = EnumType.STRING)
  private Tier tier;

  public void setTier(int rewardPoints) {
    if (rewardPoints > 5000) {
      this.tier = Tier.PLATINUM;
    } else if (rewardPoints > 3000) {
      this.tier = Tier.GOLD;
    } else if (rewardPoints > 1000) {
      this.tier = Tier.SILVER;
    } else this.tier = Tier.REGULAR;
  }
}
