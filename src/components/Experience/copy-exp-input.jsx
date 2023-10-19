import { useState } from "react";

export function UpdateExpInputs({data, yetter}) {
  return (
    <div className="exp-inputs">
      <label htmlFor="company-name">Company Name</label>
      <input type="text" id="company-name" defaultValue={data.name} onChange={yetter}/>
      <label htmlFor="title">Position Title</label>
      <input type="text" id="title" defaultValue={data.title} onChange={yetter} />
      <label htmlFor="exp-start">Start Date</label>
      <input type="text" id="exp-start"  defaultValue={data.start} onChange={yetter}/>
      <label htmlFor="exp-end">End Date</label>
      <input type="text" id="exp-end" defaultValue={data.end} onChange={yetter} />
      <label htmlFor="exp-location">Location</label>
      <input type="text" id="exp-location" defaultValue={data.location} onChange={yetter}/>
      <label htmlFor="description">Job Description</label>
      <input type="text" id="description" defaultValue={data.description} onChange={yetter} />
    </div>
  )
}