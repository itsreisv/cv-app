import { useState } from "react";

export function ExpInputs() {
  return (
    <div className="exp-inputs">
      <label htmlFor="company-name">Company Name</label>
      <input type="text" id="company-name" />
      <label htmlFor="title">Position Title</label>
      <input type="text" id="title" />
      <label htmlFor="exp-start">Start Date</label>
      <input type="text" id="exp-start" />
      <label htmlFor="exp-end">End Date</label>
      <input type="text" id="exp-end" />
      <label htmlFor="exp-location">Location</label>
      <input type="text" id="exp-location" />
      <label htmlFor="description">Job Description</label>
      <input type="text" id="description" />
    </div>
  )
}