import { getByDisplayValue } from "@testing-library/dom";
import React from "react";

function Info() {
    return (
      <body>
        <div>
              <h1 className="info-header">What is 'Free Available Chlorine'?</h1>
              <p className="info-text">Free Available Chlorine is required at all 
                points in a water network at all times to 
                ensure that microbial regrowth (we call these “bugs”) 
                does not occur. Chlorine keeps bugs inactivated
                – as soon as there is no chlorine, bugs can start
                growing again, hence the importance of keeping a
                stable chlorine residual in the network. Chlorine
                in the water network is also called residual chlorine.</p>

              <h1 className="info-header">What are 'Coliforms'?</h1>
              <p className="info-text">Coliform are bacteria which come from warm-blooded animals. 
                They are unlikely to cause illness, however the presence
                of Coliform bacteria indicates that there may be disease-causing
                organisms in the water supply. Total coliform bacteria, which this
                website has results for, are generally harmless. (Summarised from:
                <a className="link" href="https://www.doh.wa.gov/portals/1/documents/pubs/331-181.pdf">www.doh.wa.gov</a>)</p>

              <h1 className="info-header">What is 'E. Coli'?</h1>
              <p className="info-text">E. Coli is a subtype of Fecal coliform bacteria. Most E. Coli 
                bacteria are harmless, but some can cause illness. During an outbreak, 
                consumers are encouraged to boil their water, as this kills all 
                forms of E. Coli. 'Boil Water' alerts can be found on the Alerts Page</p>

                  
        </div> </body>
    )
}

export default Info;