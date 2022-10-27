import React from 'react'
import { add, sub } from 'date-fns';
import { useState } from 'react';
import ToggleButton from './ToggleButton.jsx';
import { Form } from './Form.jsx';


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
const Header = ({title, Q, calcStart, calcFinish}) => {
  const [calcStart, setCalcStart] = useState({input}); 
  const handleCalcStart = (event) => {
    //Calcurate back from Finish time input
    //it needs to run button click and judging if isClicked is true or false
     setCalcStart(add(
      {calcStart},
      { hours: 23,
        minutes: 50,
      }
     ));
    } 

  const [calcFinish, setCalcFinish] = useState({input}); 
  const handleCalcFinish = (event) => {
     //Calcurate up Finish time from start time input
      //it needs to run button click and judging if isClicked is true or false
      setCalcFinish(
      sub(
        {calcFinish},
        { hours: 23,
          minutes: 50,
        }
       ));
    } 
return (
 <header className='App-header'>
  <img className='image' src={require('../sourdough.png')} alt='Delicious Homebaked Sourdough Bread'/>
   <Form />
  <h1>{title}</h1>
  <ToggleButton onClick={handleCalcStart} text='START' color='turquoise' />
  <ToggleButton  onClick={handleCalcFinish} text='FINISH' color='pink'/>
  <h1>{Q}</h1>
 </header>
);
}
export default Header;

// How to set default value
Header.defaultProps = {
title: ''
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