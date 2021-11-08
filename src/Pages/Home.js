import { getByDisplayValue } from "@testing-library/dom";
import React from "react";

function Home(props) {

    return (

          <div>
              <p className="main-text">Water systems must provide safe drinking water for consumers. One of the ways Water Plants do this is through Chlorination. 
                  However, if a water system becomes contaminated, consumers are at a potential risk. Luckily, water systems are often tested for things
                  such as Coliforms, E. Coli and Metal. You can check the Water Supply Testing results by clicking on the area you live in, in Dunedin, down below. </p>
              {<h1 className='text'> </h1>}
              {props.children}
          </div>

    )
}

export default Home;