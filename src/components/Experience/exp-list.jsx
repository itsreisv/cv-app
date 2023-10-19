import { useState } from "react";
import { NameButtons } from "./exp-name-buttons";


export function ExpList({data, setter, getter, netter}) {


return (
<div className="exp-list">
  <div className="exp-header">
  <img src="../src/assets/briefcase.svg" className="edu-icon-new" />
      <h2>Experience</h2>
      <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron-new" onClick={setter}/>
  </div>
  <div className="exp-entries">  {data.map((item, index) => (
        <NameButtons key={index} data={item} netter={netter}/>
      ))}
  </div>
  <div className="exp"> 
        <button type="button" className="add-exp" onClick={getter} >+ Experience</button>
        </div>
</div>
)
}
