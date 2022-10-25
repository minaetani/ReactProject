import React from "react";
import { useState } from "react";

const ToggleButton = ({color, text, onClick}) => {
  const [isClicked, setIsClicked ] = useState(false);
   const handleClick = (event) => { 
    setIsClicked (!isClicked);
    onClick(event);
  }  
    return (
      <>
        <button type='button' onClick={onClick} className='btn' style={{ backgroundColor: color }}>
          {text}
        </button>
      </>
    )
  }
  

 export default ToggleButton

{/*useStateを使った切り替え
const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <button onClick={toggle}>
    {open ? 'OPEN' : 'CLOSE'}
    </button>
  )
}
*/}
