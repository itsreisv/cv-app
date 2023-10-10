import { useState } from "react";

export function EducationInfo({data}) {

  return (
    <div className="info-container">
      <div className="left-container">
        <p className="dates">{data.start} - {data.end} </p>
        <p className="city">{data.location}</p>
      </div>
      <div className="right-container">
        <p className="school">{data.name}</p>
        <p className="specialty">{data.degree}</p>
      </div>
    </div>
  )
}