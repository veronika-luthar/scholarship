import { getByDisplayValue } from "@testing-library/dom";
import React from "react";
import southern from '../Data/SouthernSurfaceSample'

function Info() {
    return (
      <body onLoad={southern}>
        <div>
          {/*   <h1>Info</h1>*/}
        </div> </body>
    )
}

export default Info;