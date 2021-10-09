import { getByDisplayValue } from "@testing-library/dom";
import React from "react";

function Home() {
    return (
        <div class='parent'>
          <div class='page-content' id="pageContent">
            {<h1> Search Bar </h1>}
          </div>
          <div class='map' id="map"></div>
        </div>
    )
}

export default Home;