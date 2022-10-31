import React from 'react'
import { add, sub } from 'date-fns';
import { useState } from 'react';
import  Button  from './Button.jsx';
import { Form } from './Form.jsx';
import  Header  from './Header.jsx';
import  Timer  from './Timer.jsx';
import { List } from './List.jsx';


// or write in destructing
const BakingPlanner = ({userInput, showCalcStart,showCalcFinish,calcStart,calcFinish,onClick,setCalcStart,setCalcFinish}) => {
  [calcStart, setCalcStart] = useState(userInput);
  const handleCalcStart = () => {
    //Calcurate back from Finish time input
    setCalcStart(sub(
    {calcStart},
    { hours: 23,
      minutes: 50,
    })
    );
    // showCalcStart(calcStart);
  }

    [calcFinish, setCalcFinish] = useState(userInput);
    const handleCalcFinish = () => {
       //Calcurate Finish time from start time input
       setCalcFinish(add(
       {calcFinish},
       { hours: 23,
         minutes: 50,
       } )); 
      //  showCalcFinish(calcFinish);
  }

return (
  <>
  <Header title='When Do You Want To'/>
  <Button color='turquoise' text='START' onClick={handleCalcFinish}/>
  <h2>Or</h2>
  <Button color='pink' text='FINISH' onClick={handleCalcStart}/>
  <Form onUserInput={setCalcStart}/>
  <Timer showCalcStart={calcStart} showCalcFinish={calcFinish} />
  </>
);
}
export default BakingPlanner;

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