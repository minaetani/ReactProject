import { format } from 'date-fns';
import React from 'react'
import './Form.css';
import { useState } from 'react';

export function Form (){
      const [initial, setInitial] = useState(format(new Date(), 'dd-MM-yyyy hh:mm'));

      const handleInput = (e) => {
         console.log(e.target.value);
         setInitial(e.target.value);
      }
      
  return (
   <>
    <p>Choose your desired date and time, then click START or FINISH button!</p>
      <div className='formsection'>
         <form method='post'>
            <label>
            <input name="start-finish" type="datetime-local" onChange={handleInput} value={initial} />
            </label>
         </form>
      </div>
   </>
  )
  };

