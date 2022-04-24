package com.hotelbooking.pricing;

import lombok.Getter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Getter
@Component
public class ChristmasHolidayPricing implements Pricing{

   private final LocalDate christmasStartDate = LocalDate.of(2022, 12, 24);
   private final LocalDate christmasEndDate = LocalDate.of(2023, 1, 02);

    // price hike in terms of percentage: 20%
    @Override
    public double getPriceMultiplier() {
        return 0.2;
    }
}
