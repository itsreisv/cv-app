import { useState } from "react";
import { Inputs } from "./label-input";

export function UpdateInput({change, setter, data}) {


  return (
    <div className="edu-build">
    <div className="edu-header">
          <img src="../src/assets/school.svg" className="edu-icon" />
    <h2>Education</h2>
    <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron" onClick={change} />
    </div>
    <div className="edu-input">
              <Inputs data={data}/>
    </div>
    <div className="edu-buttons">
      <button type="button" className="cancel" onClick={change} >Cancel</button>
      <button type="button" className="submit" onClick={setter}  >Submit</button>
    </div>
  </div>
  )
}