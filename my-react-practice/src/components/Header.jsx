import React from 'react'
import { add, sub } from 'date-fns';
import ToggleButton from './ToggleButton.jsx'
import { Form } from './Form.jsx';
import { useState } from 'react';

//const Header = (props) => {
//   return (
//     <header>
//       <img className='image' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
//       <h1>{props.title}</h1>
//       <ToggleButton text='START' color='turquoise' /><ToggleButton text='FINNISH' color='pink'/>
//       <h1>{props.q}</h1>
//     </header>
//   )
// }

// or write in destructing
const Header = ({title, Q}) => {
  const [calcStart, setCalcStart] = useState({initial}); 
  const handleCalcStart = () => {
    //Calcurate back from Finish time input
    setCalcStart(add(
      {calcStart},
      { hours: 23,
        minutes: 50,
      }
     ));
    } 

  const [calcFinish, setCalcFinish] = useState({initial}); 
  const handleCalcFinish = () => {
     //Calcurate up Finish time from start time input
     setCalcFinish(sub(
        {calcFinish},
        { hours: 23,
          minutes: 50,
        }
       )
       );
    } 
return (
 <header>
  <img className='image' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
  <p>Choose your desired date and time, then click START or FINISH button!</p>
  <Form />
  <h1>{title}</h1>
  <ToggleButton onclick={handleCalcStart} text='START' color='turquoise' />
  <ToggleButton  onclick={handleCalcFinish} text='FINISH' color='pink'/>
  <h1>{Q}</h1>
  <Timer />
 </header>
)
}
export default Header

// How to set default value 
Header.defaultProps = {
title: 'Sourdough Baking Planner for Your Busy Life'
}

//Set a certain data types and set it to 'requires' for props to catch errors
//Header.propTypes = {
//  title: propTypes.strings.isRequired,
//}

// CSS styling in JS file. const properties and drop it within { } to h1 attributes 
// When doing this inline, give 'style' attribute and provide properties within {{ }}
// But
//const headerStyling = {
// color: 'red',
// backgroundColor : 'black',
// }