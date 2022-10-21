import { format } from 'date-fns';
import { useState } from 'react'

const Timer = (props) => {
  const breadReady = () => {
    format({handleCalcStart}, 'dd-MM-yyyy hh:mm aaaa')
  }

  const youStart = () => {
    format({handleCalcFinish},'dd-MM-yyyy hh:mm aaaa')
  }
  return 
  (
  <>
    {clickStart ?  <h3>Bread ready to eat at {breadReady}</h3> : ''}
    {clickFInish ?  <h3>You start your first proces at  {youStart}</h3>  : ''}
  </>
  )
}

export default Timer
