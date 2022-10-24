import React from "react";
import { useState } from "react";

const ToggleButton = ({colour, text, handleClick}) => {
  const [isClicked, setIsClicked ] = useState(false);
   const handleClick = () => { 
    setIsClicked (!isClicked);
  }  
    return (
      <>
        <button type='button' onClick={handleClick} className='btn' style={{ backgroundColor: colour }}>
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
