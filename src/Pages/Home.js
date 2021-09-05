import { getByDisplayValue } from "@testing-library/dom";
import React from "react";
import water from './water.jpg'

function Home() {
    return (
        <div>
            <img src= {water} alt="water image" class="image"/>
          {/*   <h1>Welcome to my website</h1>*/}
        </div>
    )
}

export default Home;