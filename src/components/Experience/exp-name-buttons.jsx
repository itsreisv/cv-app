import { useState } from "react";

export function NameButtons({data, netter}) {
  return (
    <div>
      <button type="text" className="exp-name-button" onClick={netter}>{data.name}</button>
    </div>
  )
}