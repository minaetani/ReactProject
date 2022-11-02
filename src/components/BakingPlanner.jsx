import React from 'react'
import { add, sub, format, parse } from 'date-fns';
import { useState } from 'react';
import  Button  from './Button.jsx';
import { Form } from './Form.jsx';
import  Header  from './Header.jsx';
import  Timer  from './Timer.jsx';
import { List } from './List.jsx';


const BakingPlanner = () => {
  const [userInput, setUserInput] = useState(format(new Date(),"yyyy-MM-dd'T'HH:mm"));

  const [calcStart, setCalcStart] = useState();
  //Calcurate back from userInput of Finish time
  const handleCalcStart = () => {
    console.log(userInput);
    setCalcStart(sub(
    parse(userInput,"yyyy-MM-dd'T'HH:mm", new Date()),
     { hours: 28,
      minutes: 38,
    })
    );
  }
    const [calcFinish, setCalcFinish] = useState();
   //Calcurate Finish time from from userInput of Start time
    const handleCalcFinish = () => {  
      console.log(userInput);
      setCalcFinish(add(
      parse(userInput,"yyyy-MM-dd'T'HH:mm",new Date()),
      { hours: 42,
        minutes: 50,
      } )); 
  }
return (
  <>
  <Header title='Welcome To Sourdough Baking Planner!'/>
   <Form onUserInput={setUserInput} />
   <div className='wrapper'>
     <h2>When do you want to</h2>
         <Button color='turquoise' text='START' onClick={handleCalcFinish}/>
          <span>or</span>
         <Button color='pink' text='FINISH' onClick={handleCalcStart}/>
      <h2>your bread?</h2>
     <p>Choose your desired date and time, then click START or FINISH button!</p>
  </div>
  <Timer calcStart={calcStart} calcFinish={calcFinish} />
  <List />
  </>
);
}
export default BakingPlanner;
