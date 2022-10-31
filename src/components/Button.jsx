import React from "react";
import { useState } from 'react';

const Button = ({color, text, onClick, clicked, setClicked}) => {
  [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    onClick(clicked);
  }
    return (
      <>
        <button type='button' onClick={handleClick} className='btn' style={{ backgroundColor: color }}>
          {text}
        </button>
      </>
    );
  }

 export default Button;