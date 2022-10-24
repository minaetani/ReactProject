import { format } from 'date-fns';
import React from 'react'
import './Form.css';
import { useState } from 'react';

export function Form (props){
      const [initial, setInitial] = useState(format(new Date(), 'dd-MM-yyyy hh:mm'));

      const handleInput = (e) => {
         setInitial(e.target.value);
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
             value={initial} />
            </label>
         </form>
        
      </div>
   </>
  )
  };
