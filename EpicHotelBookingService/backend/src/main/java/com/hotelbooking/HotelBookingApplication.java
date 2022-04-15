package com.hotelbooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HotelBookingApplication {

	public static void main(String[] args) {

		SpringApplication.run(HotelBookingApplication.class, args);
	}

	/*
	Components
APIs - input and output of API should be in JSON and should include error handling and validation of inputs
APIs can be demonstrated using a basic Web/mobile UI or through Postman
UI will be used by Customers and Hotel employees
APIs should support following functionality:
Manage your Hotel rewards account
Search for Hotels
Book one or more rooms for stay up to 1 week
Options may be selected for each room for one or more amenities:
Daily Continental Breakfast
Access to fitness room
Access to Swimming Pool/Jacuzzi
Daily Parking
All meals included (Breakfast, Lunch, Dinner)
Room rates based on Room types and number of guests e.g. Double rooms, Suites, Singe room ( up to guests)
Use dynamic pricing - based on weekdays/weekends/holidays
Seasonal - peak season such as Summer/Christmas Holiday season
Customer Loyalty
Change/Cancel reservations
Enrolling as a new customer
Deploy API to AWS in an Auto Scaled EC2 Cluster with Load Balancer (or another cloud provider)
Develop a Web or mobile UI that will make use of the APIs
Create your own database with mock data
	 */

}
