import { useState } from "react";
import '/src/styles/preview.css'
import { EducationInfo } from "./Education/school-preview";

export function Preview({text, email, phone, location, list}) {
  return (
<div className='preview'>
  <div className='header'>
    <div className='name'><h1>{text}</h1></div>
    <div className="info">
      <div className='email'><img src="../src/assets/mail.svg" className="header-icon"/>{email}</div>
      <div className='phone'><img src="../src/assets/phone.svg" className="header-icon" />{phone}</div>
      <div className='location'><img src="../src/assets/location.svg" className="header-icon" />{location}</div>
    </div>
  </div>
  <div className="education">
    <div className="education-head">Education</div>
 {list.map((item, index) => (
        <EducationInfo key={index} data={item} />
      ))}
  </div>
  <div className="experience"></div>
  </div>
  )
}