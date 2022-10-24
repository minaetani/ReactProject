import { format } from 'date-fns';
import ToggleButton from './ToggleButton.jsx'

const Timer = () => {
  const breadReady = () => {
    format({calcFinish}, 'dd-MM-yyyy hh:mm aaaa')
  }
  const youStart = () => {
    format({calcStart},'dd-MM-yyyy hh:mm aaaa')
  }
  return 
  (
    <>
     <p>{handleClick ?  `Bread ready to eat at ${breadReady}` : ''}</p> 
     <p>{handleClick ?  `You start your first proces at  ${youStart}` : ''}</p>
    <>
  )
}

export default Timer
