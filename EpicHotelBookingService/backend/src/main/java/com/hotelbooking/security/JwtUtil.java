package com.hotelbooking.security;

import com.hotelbooking.models.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// Jwt Token Generator
@Service
public class JwtUtil {

  @Value("${jwt.secret}")
  private String secret;

  //  private final long EXPIRATION = 1000 * 60 * 60 * 10L;
  private final long EXPIRATION = 1000 * 60 * 60L;

  public String generateToken(final String username) {
    final Map<String, Object> claims = new HashMap<>();
    return createToken(claims, username);
  }

  public String validateTokenAndReturnUsername(final String token) {
    Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    if (!isTokenExpired(claims.getExpiration())) {
      return claims.getSubject();
    }
    return null;
  }

  private Boolean isTokenExpired(final Date tokenExpirationClaim) {
    return tokenExpirationClaim.before(new Date());
  }

  private String createToken(final Map<String, Object> claims, final String subject) {
    return Jwts.builder()
        .setClaims(claims)
        .setSubject(subject)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
        .signWith(SignatureAlgorithm.HS256, secret)
        .compact();
  }
}
