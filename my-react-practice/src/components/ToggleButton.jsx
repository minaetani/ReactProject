import React from "react";
import { useState } from "react";

const ToggleButton = ({color, text, onClick}) => {
  const [isClicked, setIsClicked ] = useState(false);
   const handleClick = (event) => { 
    setIsClicked (!isClicked);
    onClick(event);
    console.log('aaa');
  }  
    return (
      <>
        <button type='button' onClick={handleClick} className='btn' style={{ backgroundColor: color }}>
          {text}
        </button>
      </>
    )
  }
  

 export default ToggleButton

