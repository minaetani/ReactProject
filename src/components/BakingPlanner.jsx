import React from 'react'
import { add, sub, format, parse } from 'date-fns';
import { useState } from 'react';
import  Button  from './Button.jsx';
import { Form } from './Form.jsx';
import  Header  from './Header.jsx';
import  Timer  from './Timer.jsx';
import { List } from './List.jsx';


// or write in destructing
const BakingPlanner = () => {
  const [userInput, setUserInput] = useState(format(new Date(),"yyyy-MM-dd'T'HH:mm"));

  const [calcStart, setCalcStart] = useState();
  //Calcurate back from userInput of Finish time
  const handleCalcStart = () => {
    console.log(userInput);
    setCalcStart(sub(
    parse(userInput,"yyyy-MM-dd'T'HH:mm", new Date()),
     { hours: 23,
      minutes: 50,
    })
    );
  }
    const [calcFinish, setCalcFinish] = useState();
   //Calcurate Finish time from from userInput of Start time
    const handleCalcFinish = () => {  
      console.log(userInput);
      setCalcFinish(add(
      parse(userInput,"yyyy-MM-dd'T'HH:mm",new Date()),
      { hours: 23,
        minutes: 50,
      } )); 
  }
return (
  <>
  <Header title='Welcome To Sourdough Baking Planner! ' Q='When Do You Want To'/>
  <Button color='turquoise' text='START' onClick={handleCalcFinish}/>
  <h2>or</h2>
  <Button color='pink' text='FINISH' onClick={handleCalcStart}/>
  <Form onUserInput={setUserInput} />
  <Timer calcStart={calcStart} calcFinish={calcFinish} />
  <List />
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