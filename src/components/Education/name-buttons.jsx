import { useState } from "react";

export function NewButtons({data, click}) {
  return (
    <div>
      <button type="text" className="name-button" onClick={click} >{data.name}</button>
    </div>
  )
}