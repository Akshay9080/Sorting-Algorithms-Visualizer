import React from 'react';
import './Display.css';

function Display({arr,num,towerWidth}) {

  return(
    <div className = "container">

    {
      arr.map(ele => (
      <div style = {{height: ele.val + "px", width: towerWidth + "px",backgroundColor: ele.col,margin: "0 2px"}} key = {ele.id}></div>
    ))}
    </div>
  )

}

export default Display;
