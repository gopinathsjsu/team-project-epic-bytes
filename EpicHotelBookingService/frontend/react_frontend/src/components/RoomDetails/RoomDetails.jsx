import React, { useState } from 'react'
import { useParams } from 'react-router';
import "./roomDetails.css";
import {useLocation, withRouter, Link} from 'react-router-dom';
import { color } from '@mui/system';
import { blue, blueGrey, grey } from '@material-ui/core/colors';


const RoomDetails = (props) => {
  const currentLocation = useLocation()
  const {img, location, title, description, star, price, total} = currentLocation.state.data
  console.log(currentLocation.state.data,"successful")
  
  return (
    <div className='roomoverview'>
      <div className='display-image'>
        {/* HotelRoomOverview  */}
        <br></br>
        <img src = {img}/>
        {/* <p> {location}</p> */}
        
      </div>
      <br></br>
      <br></br>

      <div className='cards'>

        <div className="left-card">

          <div className='hotel-info'>
            <h1> {title} </h1>
            <br></br>
            <p> {location} </p>
            <br></br>
            <h3 style={{color: "coral"}}> Description: </h3>
            <p style={{paddingTop:"10px"}}> {description}</p>

            <br></br>
            <br></br>
          </div>

          {/* <hr/> */}
          <br></br>

          <h2 style={{marginLeft:"43px", color: "coral"}}> Amenities</h2> <br></br>
          <div className='Amenities' >
            
            <input type="checkbox"/>
            <label> Daily Continental Breakfast </label> 
            <br></br><br></br>
            <input type="checkbox"/>
            <label> Access to fitness room </label> 
            <br></br><br></br>
            <input type="checkbox"/>
            <label> Access to Swimming Pool/Jacuzzi </label> 
            <br></br><br></br>
            <input type="checkbox"/>
            <label> Daily Parking </label> 
            <br></br><br></br>
            <input type="checkbox"/>
            <label> All meals included (Breakfast, Lunch, Dinner) </label> 
            <br></br><br></br>
          </div>

          {/* <hr/> */}
          <br></br>

          <div>
            <h2 style={{marginLeft:"43px", color: "coral"}}> Things to know </h2> <br></br>
            
          </div>

          {/* <div className='hotel-rules'> */}
            {/* <div> */}
              <h4 style={{marginLeft:"43px"}}> Hotel rules </h4>
              <ul className='hotel-rules'> <br></br>
                <li> Check-in: 12 PM </li>
                <li> Checkout: 11 AM </li>
                <li> Pets not allowed </li>
              </ul>
              <br></br>
            {/* </div>
            <div> */}
              <h4 style={{marginLeft:"43px"}}> Health and Safety </h4>
              <ul className='health-rules'> <br></br>
                <li> Committed to Airbnb's enhanced cleaning process </li>
                <li> Airbnb's social-distancing and other COVID-19-related guidelines apply </li>
                <li> Carbon monoxide alarm </li>
                <li> Smoke alarm </li>
              </ul>
              <br></br>
            {/* </div>
            <div> */}
              <h4 style={{marginLeft:"43px"}}> Cancellation policy </h4> <br></br>
              <p style={{padding: "auto", marginLeft: "90px"}}> Add your trip dates to get the cancellation details for this stay</p>
              <br></br>
            {/* </div> */}
          {/* </div> */}
          <div>
            <h2 style={{marginLeft:"43px", color: "coral"}}> Places nearby: </h2> <br></br>
            <div className="places-hotel">
                  <div className="places-left">
                    <ul>
                      <li> Bart </li>
                      <li> Target </li>
                      <li> Airport </li>
                    </ul>
                  </div>
                  <div className="places-right">
                    <ul>
                      <li> Shopping Mall </li>
                      <li> Mini Markets</li>
                      <li> Pharmacies </li>
                    </ul> <br></br> <br></br>
                  </div>
                </div>
          </div>
        </div>

        <div className="right-card">
              <div className="payment-card">
                <div>
                <h2 className="heading-card"> <b> Best Deal </b></h2>
                <br></br><br></br>
                <h1 style={{marginLeft:"33px"}}>{price}</h1>
                <p style={{marginLeft:"33px", color: blueGrey}}>inclusive of all taxes</p>
                </div>

                <div className="flex date-div">
                <p>Wed, 13 Oct - Fri, 29 Oct</p>
                <p>1 Room 2 Guests</p>
               </div>
              </div>

              <br></br> <br></br>
              <div className="flex coupon-div">
                <div>
                  <p>FUSION333 coupon applied</p>
                </div>
                <div className="coupon-flex">
                <div>
                  <h5><b>$ -20</b></h5> 
                </div>
                <div>
                <input type="checkbox" className="green" />
                </div>
                </div>
              </div>
              <br></br>
              
              <div>
                <Link to={{pathname: '/payment'}}>
                  <button className="continue-btn"> Continue to Book </button>
                </Link>
              </div>
              <br></br>
              <div className='guest-policies'>
                <p> * By proceeding, you agree to our Guest Policies. </p>
                <p> * Follow safety measures advised at the hotel. </p>
              </div>

              {/* <Link to={`/payment/${id}`}>
                <button className="continue-btn">Continue to Book</button>
              </Link> */}
              <br></br> <br></br>
              <div className="redFont">
                <p><Link>Cancellation Policy</Link></p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default RoomDetails