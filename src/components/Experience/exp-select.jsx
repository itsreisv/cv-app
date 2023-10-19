import { useState } from "react";
import { ExpDrowndown } from "./exp-dropdown";
import { ExpList } from "./exp-list";
import { ExpBuild } from "./exp-build";
import { EditExpBuild } from "./exp-edit";

export function ExpSelect({expItems, submit, netter, yetter}) {
  let initalBuild = <ExpDrowndown setter={switchBuild}/>
  let listBuild = <ExpList data={expItems} setter={revertBuild} getter={newBuild} netter={handleClick}/>
  let inputBuild = <ExpBuild setter={revertBuild} netter={switchBuild} submit={submit}/>
  const [build, setBuild] = useState(initalBuild)
  function switchBuild() {
    setBuild(listBuild)
  }
  function revertBuild() {
    setBuild(initalBuild)
  }
  function newBuild() {
    setBuild(inputBuild)
  }
  function handleClick(event) {
    let target = event.target;
    if (target.textContent == expItems[0].name) {
      setBuild(<EditExpBuild data={expItems[0]} setter={revertBuild} netter={switchBuild}  yetter={netter}/>)
    } else if (target.textContent == expItems[1].name) {
      setBuild(<EditExpBuild data={expItems[1]} setter={revertBuild} netter={switchBuild}   yetter={yetter}/>)
    }
  }
  return (
    <div>
    {build}
    </div>
  )
}