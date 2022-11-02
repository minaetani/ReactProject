import { parseISO } from 'date-fns';
import React from 'react'
import { useState } from 'react';
import './Form.css';

export function Form ({onUserInput}){
      const [input, setInput] = useState(parseISO(Date.now));
      const handleInput = (e) => {
         setInput(e.target.value);
         onUserInput(input);
      }   

     
  return (
   <>
      <div className='formsection'>
        <h2>Your Bread?</h2>
         <form method='post'>
            <label>
            Choose your desired date and time, <br />then click START or FINISH button!
            <input 
             name="start-finish" 
             type="datetime-local" 
             onChange={handleInput} 
             value={input} />
            </label>
         </form>
        
      </div>
   </>
  )
  };
