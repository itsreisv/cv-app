import { useState } from "react";
import { ExpInputs } from "./exp-inputs";

export function ExpBuild({setter, netter, submit}) {
  return (
    <div className="exp-info">
      <div className="exp-header">
      <img src="../src/assets/briefcase.svg" className="edu-icon-new" />
      <h2>Experience</h2>
      <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron-new" onClick={setter}/>
      </div>
      <div className="exp-input">
      <ExpInputs />
      </div>
      <div className="exp-buttons">
      <button type="button" className="cancel"  onClick={netter}>Cancel</button>
      <button type="button" className="submit"  onClick={submit} >Submit</button>
      </div>
    </div>
  )
}