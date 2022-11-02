import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';

export function Form ({onUserInput}) {
      const [input, setInput] = useState(format(new Date(),"yyyy-MM-dd'T'HH:mm")); //Convert string data to date object
      const handleInput = (e) => {
         setInput(e.target.value);
         onUserInput(e.target.value);
      }   

  return (
   <>
      <div className='formsection'>
         <form method='post'>
            <label>
            <input 
             name="start-finish" 
             type="datetime-local" 
             onChange={handleInput} 
             value={input} 
             required />
            </label>
         </form>
        
      </div>
   </>
  )
  };
