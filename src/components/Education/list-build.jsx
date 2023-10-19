import { useState } from "react";
import '/src/styles/list-build.css'
import { NewButtons } from "./name-buttons";


export function ListBuild({change, build, list, click}) {


  return (
    <div className="list-build">
    <div className="edu-header">
            <img src="../src/assets/school.svg" className="edu-icon" />
      <h2>Education</h2>
      <img src="../src/assets/chevron-down-outline.svg" className="edu-icon" id="chevron" onClick={change} />
      </div>
      <div className="entries"> 
      {list.map((item, index) => (
        <NewButtons key={index} data={item} click={click}/>
      ))}
        <div className="edu"> 
        <button type="button" className="add-edu" onClick={build} >+ Education</button>
        </div>
      </div>
      </div>
  )
}

