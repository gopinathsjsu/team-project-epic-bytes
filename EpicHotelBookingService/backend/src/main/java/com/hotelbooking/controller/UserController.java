package com.hotelbooking.controller;

import com.hotelbooking.models.request.LoginRequest;
import com.hotelbooking.models.response.LoginResponse;
import com.hotelbooking.security.JwtUtil;
import com.hotelbooking.service.MyUserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  private final JwtUtil jwtUtil;

  private final MyUserDetailsService myUserDetailsService;

  private final AuthenticationManager authenticationManager;

  public UserController(
      final JwtUtil jwtUtil,
      final MyUserDetailsService myUserDetailsService,
      final AuthenticationManager authenticationManager) {
    this.jwtUtil = jwtUtil;
    this.myUserDetailsService = myUserDetailsService;
    this.authenticationManager = authenticationManager;
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

  @PostMapping("/authenticate")
  public LoginResponse login(@RequestBody final LoginRequest loginRequest) throws Exception {
    try {
      authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(
              loginRequest.getUsername(), loginRequest.getPassword()));
    } catch (BadCredentialsException e) {
      throw new Exception("Incorrect Username or Password", e);
    }

    final UserDetails userDetails =
        myUserDetailsService.loadUserByUsername(loginRequest.getUsername());
    final String jwt = jwtUtil.generateToken(userDetails);
    return new LoginResponse(jwt);
  }
}
