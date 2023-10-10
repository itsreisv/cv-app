import { useState } from "react";
import '/src/styles/build.css'


export function Build({change, email, phone, location}) {

  return (
    <div className="build">
              <h2>Personal Details</h2>
      <div className="user-input">
      <label htmlFor="name-input" /><h4>Full Name</h4>
      <input id='name-input' type="text"  onChange={change} />
      <label htmlFor="email-input" /><h4>Email</h4>
      <input type="email" id="email-input" onChange={email} />
      <label htmlFor="phone-input" /><h4>Phone Number</h4>
      <input type="tel" id="phone-input" onChange={phone} />
      <label htmlFor="location-input" /><h4>Location</h4>
      <input type="text" id="location-input" onChange={location} />
      </div>
    </div>
  )
}