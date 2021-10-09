import React from 'react';
import worldMap from '../images/worldMap.svg';
//import ReactDOM from 'react-dom';

const Graph = () => {
    
  //  imageClick = () => {
  //      console.log("click");
 //   }
    
 const message = () => {
    
    console.log('Click');
   }
   
   return (
       <div class='parent'>
           <div class='header'/>
        <div class='map'>
        
        <img src = {worldMap} onClick={message}  style={{"pointer-events": "all"}}></img>
        </div>
        </div>
     );
    }

//ReactDOM.render(<Graph />, document.getElementById('pageContent'));
export default Graph;

//<img src = {worldMap} onClick={alert("bleh")}></img>
//