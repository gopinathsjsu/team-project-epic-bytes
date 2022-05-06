package com.hotelbooking.exception;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@ControllerAdvice
public class HotelExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(value = {HotelExceptions.class})
  public ResponseEntity<Object> handleBusinessException(HotelExceptions e) {

    log.error("Business Exception: ", e.getReason());

    return new ResponseEntity<Object>(e.getReason(), HttpStatus.BAD_REQUEST);
  }

  //    @ExceptionHandler(value
  //            = { IllegalArgumentException.class, IllegalStateException.class })
  //    protected ResponseEntity<Object> handleConflict(
  //            RuntimeException ex, WebRequest request) {
  //        String bodyOfResponse = HotelExceptions.get
  //        return handleExceptionInternal(ex, bodyOfResponse,
  //                new HttpHeaders(), HttpStatus.CONFLICT, request);
  //    }
}
