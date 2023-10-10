import { useState } from "react";
import '/src/styles/education-build.css'

export function EduBuild({change, setter}) {


  return (
    <div className="edu-build">
      <div className="edu-header">
            <img src="../src/assets/school.svg" className="edu-icon" />
      <h2>Education</h2>
      <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron" onClick={change} />
      </div>
      <div className="edu-input">
        <label htmlFor="school">School</label>
        <input type="text" id="school" />
        <label htmlFor="degree">Degree</label>
        <input type="text"  id="degree" />
        <label htmlFor="start">Start Date</label>
        <input type="text" id="start" />
        <label htmlFor="end">End Date</label>
        <input type="text" id="end" />
        <label htmlFor="edu-location">Location</label>
        <input type="text" id="edu-location" />
      </div>
      <div className="edu-buttons">
        <button type="button" className="cancel" onClick={change} >Cancel</button>
        <button type="button" className="submit" onClick={setter}  >Submit</button>
      </div>
    </div>
  )
}