import { useState } from "react";
import '/src/styles/exp-dropdown.css'

export function ExpDrowndown({setter}) {
  return (
    <div className="exp-dropdown">
      <img src="../src/assets/briefcase.svg" className="edu-icon-new" />
      <h2>Experience</h2>
      <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron-new" onClick={setter} />
    </div>
  )
}