import { useState } from "react";

export function Inputs({data, netter}) {


  return (
    <div>
      <label htmlFor="school">School</label>
      <input type="text" id="school" defaultValue={data.name} onChange={netter}/> 
      <label htmlFor="degree">Degree</label>
      <input type="text"  id="degree" defaultValue={data.degree} onChange={netter}/>
      <label htmlFor="start">Start Date</label>
      <input type="text" id="start" defaultValue={data.start} onChange={netter}/>
      <label htmlFor="end">End Date</label>
      <input type="text" id="end" defaultValue={data.end} onChange={netter}/>
      <label htmlFor="edu-location">Location</label>
      <input type="text" id="edu-location" defaultValue={data.location} onChange={netter}/>
    </div>
  )
}