import { useState } from "react";
import { EduBuild } from "./education-build"
import { EduPre } from "./education-pre";
import { ListBuild } from "./list-build";

export function BuildSelect({setter, list}) {

  let initialBuild = <EduPre change={buildChange}/>
  let inputBuild = <EduBuild  change={buildChangeTwo} setter={setter} list={list}/>
  let listBuild = <ListBuild change={buildChangeThree} build={switchBuild} list={list}/>
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


  return (
    <div>
      {build}
    </div>
  )
}