import { useState } from "react";

export function Inputs({data}) {


  return (
    <div>
      <label htmlFor="school">School</label>
      <input type="text" id="school" value={data.name} /> 
      <label htmlFor="degree">Degree</label>
      <input type="text"  id="degree" value={data.degree} />
      <label htmlFor="start">Start Date</label>
      <input type="text" id="start" value={data.start} />
      <label htmlFor="end">End Date</label>
      <input type="text" id="end" value={data.end} />
      <label htmlFor="edu-location">Location</label>
      <input type="text" id="edu-location" value={data.location}/>
    </div>
  )
}