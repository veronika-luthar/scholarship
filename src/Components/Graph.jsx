import React from 'react';
import worldMap from '../images/worldMap.svg';
//import ReactDOM from 'react-dom';

    const Graph = () => {

        const imageClick = () => {
            console.log("click");
        }
     
        return (
             <div className='map'>
             <img className='map' src = {worldMap} onClick={imageClick}></img>
             </div>
          );
         }
     
//ReactDOM.render(<Graph />, document.getElementById('pageContent'));
export default Graph;

//<img src = {worldMap} onClick={alert("bleh")}></img>
//