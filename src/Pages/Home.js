import { getByDisplayValue } from "@testing-library/dom";
import React from "react";

function Home(props) {
    return (

          <div>
              {<h1> Search Bar </h1>}
              {props.children}
          </div>

    )
}

export default Home;