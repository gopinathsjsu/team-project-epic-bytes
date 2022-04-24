package com.hotelbooking.pricing;

public class CustomerLoyaltyPricing implements Pricing{

    // price hike in terms of percentage 7%
    @Override
    public double getPriceMultiplier() {

        return 0.07;
    }
}
