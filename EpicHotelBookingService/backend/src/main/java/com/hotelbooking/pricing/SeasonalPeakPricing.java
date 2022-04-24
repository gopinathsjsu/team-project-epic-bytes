package com.hotelbooking.pricing;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class SeasonalPeakPricing implements Pricing {
  private final LocalDate seasonStartDate = LocalDate.of(2022, 6, 21);
  private final LocalDate seasonEndDate = LocalDate.of(2022, 9, 22);

  // price hike in terms of percentage 10%
  @Override
  public double getPriceMultiplier() {
    return 0.05;
  }
}
