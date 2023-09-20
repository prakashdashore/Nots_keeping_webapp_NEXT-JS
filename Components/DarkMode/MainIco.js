import React, { useState } from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export default function MainIco({handleToggleDarkMode}) {
    // const handleToggleDarkMode = (e)=>{
    //     console.log(e.target.checked)
    // }
  return (
    <div className="z-10">

    <Switch
      onChange={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
      size="lg"
      color="warning"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      Dark mode
    </Switch>
    </div>
  );
}
