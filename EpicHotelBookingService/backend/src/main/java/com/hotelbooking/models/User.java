package com.hotelbooking.models;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.time.LocalDate;

@Entity @Getter @Setter @ToString @NoArgsConstructor
public class User implements Serializable {

        public User(String username, String password, String firstName, String lastName, String phone, String email, String role) {
                this.username = username;
                this.password = password;
                this.firstName = firstName;
                this.lastName = lastName;
                this.phone = phone;
                this.email = email;
                this.role = role;
        }

        @Id
        @Column(length = 15, unique = true)
        private String username;

        @Column(name = "password")
        @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
        private String password;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(name = "contact_ph")
        private String phone;

        @Column(unique=true)
        @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE)
        private String email;

        @Column(name = "role")
        private String role;

        @Column
        private int rewardPoints;
}
