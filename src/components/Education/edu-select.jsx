import { useState } from "react";
import { EduBuild } from "./education-build"
import { EduPre } from "./education-pre";
import { ListBuild } from "./list-build";
import { UpdateInput } from "./update-input";

export function BuildSelect({setter, list}) {

  let initialBuild = <EduPre change={buildChange}/>
  let inputBuild = <EduBuild  change={buildChangeTwo} setter={setter} list={list}/>
  let listBuild = <ListBuild change={buildChangeThree} build={switchBuild} list={list} click={handleClick}/>
  const [build, setBuild] = useState(initialBuild);

  function buildChange() {
    setBuild(listBuild)
  }
  function buildChangeTwo() {
    setBuild(listBuild)
  }
  function buildChangeThree() {
    setBuild(initialBuild)
  }
  function switchBuild() {
    setBuild(inputBuild)
  }
  function handleClick(event) {
    let target = event.target;
    if (target.textContent == list[0].name) {
      setBuild(<UpdateInput data={list[0]}/>)
    } else if (target.textContent == list[1].name) {
      setBuild(<UpdateInput data={list[1]}/>)
    }
  }
  


  return (
    <div>
      {build}
    </div>
  )
}