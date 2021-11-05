import { getByDisplayValue } from "@testing-library/dom";
import React from "react";

function Home(props) {

    return (

          <div>
              {<h1 className='text'> Click on a Zone below </h1>}
              {props.children}
          </div>

    )
}

export default Home;