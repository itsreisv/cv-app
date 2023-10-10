import { useState } from "react";
import '/src/styles/education-pre.css'

export function EduPre({change}) {
  return (
    <div className="edu-pre">
      <img src="../src/assets/school.svg" className="edu-icon" />
      <h2>Education</h2>
      <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron" onClick={change} />
    </div>
  )
}