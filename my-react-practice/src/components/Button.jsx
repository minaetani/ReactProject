import React from "react";

const Button = ({color, text, onClick}) => {
    
    return (
      <>
        <button type='button' onClick={onClick} className='btn' style={{ backgroundColor: color }}>
          {text}
        </button>
      </>
    );
  }

 export default Button;