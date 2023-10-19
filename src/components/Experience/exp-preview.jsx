import { useState } from "react";


export function ExpInfo({data}) {
  return (
    <div className="exp-container">
      <div className="exp-left-container">
        <p className="exp-dates">{data.start} - {data.end}</p>
        <p className="exp-city">{data.location}</p>
      </div>
      <div className="exp-right-container">
        <p className="company-name">{data.name}</p>
        <p className="job-title">{data.title}</p>
        <p className="job-description">{data.description}</p>
      </div>
    </div>
  )
}
