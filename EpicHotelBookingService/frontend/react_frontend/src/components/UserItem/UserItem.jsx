import React, {useState, useEffect} from 'react';
import './userItem.css';


const UserItem = ()  => {

  return (
    // <div>
    // <div className='reward'>
    //     <div className='card_class'>
    //     <h2>Thank you</h2>
    //     <span>
    //          rewards
    //     </span>
    //     </div>
    //     {/* <button onClick = {()=>{balance()}} ></button> */}
        <div className='home__section'>
            <div className='card'>
                <img src= "https://brandslogos.com/wp-content/uploads/images/large/uber-logo-2.png" alt="" />
                <div className="card__info">
                    <h2>"UBER"</h2>
                    <h4>"Claim Reward here"</h4>
                    <h3>5000</h3>
                </div>
            </div>
            <div className='card'>
                <img src= "https://brandslogos.com/wp-content/uploads/images/large/uber-logo-2.png" alt="" />
                <div className="card__info">
                    <h2>"UBER"</h2>
                    <h4>"Claim Reward here"</h4>
                    <h3>5000</h3>
                </div>
            </div>
            <div className='card'>
                <img src= "https://brandslogos.com/wp-content/uploads/images/large/uber-logo-2.png" alt="" />
                <div className="card__info">
                    <h2>"UBER"</h2>
                    <h4>"Claim Reward here"</h4>
                    <h3>5000</h3>
                </div>
            </div>
        </div>
    // </div>
   
    // </div> */}
  )
}

export default UserItem