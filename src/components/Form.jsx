import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import './Form.css';

export function Form ({onUserInput}) {
      const [input, setInput] = useState(format(new Date(),"yyyy-MM-dd'T'HH:mm")); //Convert string data to date object
      const handleInput = (e) => {
         setInput(e.target.value);
         onUserInput(e.target.value);
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
