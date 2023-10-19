import { useState } from "react";
import { UpdateExpInputs } from "./copy-exp-input";

export function EditExpBuild({setter, netter, data, yetter}) {
  return (
    <div className="exp-info">
      <div className="exp-header">
      <img src="../src/assets/briefcase.svg" className="edu-icon-new" />
      <h2>Experience</h2>
      <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron-new" onClick={setter}/>
      </div>
      <div className="exp-input">
      <UpdateExpInputs data={data} yetter={yetter}/>
      </div>
      <div className="exp-buttons">
      <button type="button" className="cancel"  onClick={netter}>Cancel</button>
      <button type="button" className="submit"  onClick={netter} >Submit</button>
      </div>
    </div>
  )
}