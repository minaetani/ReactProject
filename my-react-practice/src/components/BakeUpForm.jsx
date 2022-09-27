import React from 'react'
import './BakeUpForm.css';

export default function BakeUpForm () {
  return (
  <>
     <form method='post'>
       <label>When do you want your bread to be ready to eat?</label>
       <div><input name="date" type="date" /></div>
       <div><input name="time" type="time"  /></div>
       <div><input type="submit" value="Submit" /></div>
    </form>
  </>
  )
};