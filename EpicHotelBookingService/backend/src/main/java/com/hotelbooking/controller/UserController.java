package com.hotelbooking.controller;

import com.hotelbooking.models.User;
import com.hotelbooking.models.request.LoginRequest;
import com.hotelbooking.models.request.SignUpRequest;
import com.hotelbooking.models.response.LoginResponse;
import com.hotelbooking.security.JwtUtil;
import com.hotelbooking.service.MyUserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Locale;
import java.util.Optional;

import static com.hotelbooking.constants.Constants.LOGIN_ENDPOINT;
import static com.hotelbooking.constants.Constants.SIGNUP_ENDPOINT;

@RestController
public class UserController {
  private final JwtUtil jwtUtil;

  private final MyUserDetailsService myUserDetailsService;

  private final AuthenticationManager authenticationManager;

  private final PasswordEncoder bcryptEncoder;

  public UserController(
      final JwtUtil jwtUtil,
      final MyUserDetailsService myUserDetailsService,
      final AuthenticationManager authenticationManager,
      final PasswordEncoder bcryptEncoder) {
    this.jwtUtil = jwtUtil;
    this.myUserDetailsService = myUserDetailsService;
    this.authenticationManager = authenticationManager;
    this.bcryptEncoder = bcryptEncoder;
  }

  @GetMapping("/")
  public String home() {
    return "Hi";
  }

  @GetMapping("/admin")
  public String admin() {
    return "Hi admin";
  }

  @GetMapping("/user")
  public String user() {
    return "Hi user";
  }

  @PostMapping(LOGIN_ENDPOINT)
  public LoginResponse login(@Valid @RequestBody final LoginRequest loginRequest) throws Exception {
    try {
      authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(
              loginRequest.getUsername(), loginRequest.getPassword()));
    } catch (BadCredentialsException e) {
      throw new Exception("Incorrect Username or Password", e);
    }

    final UserDetails userDetails =
        myUserDetailsService.loadUserByUsername(loginRequest.getUsername());
    final String jwt = jwtUtil.generateToken(userDetails.getUsername());
    return new LoginResponse(jwt);
  }

  @PostMapping(SIGNUP_ENDPOINT)
  public LoginResponse register(@Valid @RequestBody final SignUpRequest signUpRequest)
      throws Exception {
    Optional<User> user = myUserDetailsService.getUserByUsername(signUpRequest.getUsername());
    if (user.isEmpty()) {
      myUserDetailsService.save(
          new User(
              signUpRequest.getUsername(),
              bcryptEncoder.encode(signUpRequest.getPassword()),
              signUpRequest.getFirstName(),
              signUpRequest.getLastName(),
              signUpRequest.getPhone(),
              signUpRequest.getEmail().toLowerCase(),
              "USER"));
      final String jwt = jwtUtil.generateToken(signUpRequest.getUsername());
      return new LoginResponse(jwt);
    } else {
      throw new Exception("Username already exists");
    }
  }
}
