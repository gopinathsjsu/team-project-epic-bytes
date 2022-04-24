package com.hotelbooking.pricing;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class WeekendPricing implements Pricing {

  private final List<DayOfWeek> days = new ArrayList<DayOfWeek>();

  private void setDays(List<DayOfWeek> days) {
    days.add(DayOfWeek.SATURDAY);
    days.add(DayOfWeek.SUNDAY);
  }

  // price hike in terms of percentage: 10%
  @Override
  public double getPriceMultiplier() {
    return 0.1;
  }
}
