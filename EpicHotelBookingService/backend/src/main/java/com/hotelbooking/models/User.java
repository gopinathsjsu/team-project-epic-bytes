package com.hotelbooking.models;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity @Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class User {

        @Id
        @Column(length = 15)
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

        @Column(name = "email")
        private String email;

        @Column(name = "role")
        private String role;
}
