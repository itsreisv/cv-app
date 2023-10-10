import { useState } from "react";

export function NewButtons({data}) {
  return (
    <div>
      <button type="text" className="name-button">{data.name}</button>
    </div>
  )
}