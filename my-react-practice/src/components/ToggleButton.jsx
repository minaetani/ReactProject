import { add, sub } from 'date-fns';
import React from "react";
import { useState } from 'react'
import { Form } from './Form.jsx';

const ToggleButton = ({onClick, colour, text}) => {
  const [calcStart, setCalcStart] = useState({initial}); // tried to get return date
  const [calcFinish, setCalcFinish] = useState({initial}); 

  const handleCalcStart = () => {
    //Calcurate back from Finish time input
    const startTime = 
    add(
      {calcStart},
      { hours: 23,
        minutes: 50,
      }
     );
    setCalcStart(startTime);
    } 
  const handleCalcFinish = () => {
     //Calcurate up Finish time from start time input
    const finishTime = 
      sub(
        {calcFinish},
        { hours: 23,
          minutes: 50,
        }
       );
       setCalcFinish(finishTime);
    } 

    const [isStart, setIsStart ] = useState(false);
    const [isFinish, setIsFinish ]= useState(false);
   
    const clickStart = () => { 
      setIsStart(!isStart);
    }
      
    const clickFinish =() => {
       setIsFinish(!isFinish); 
    }

    return (
      <>
        <button type='button' onClick={onClick} className='btn' style={{ backgroundColor: colour }}>
          {text}
        </button>
        {handleCalcStart}
        {handleCalcFinish}
      </>
    );
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
