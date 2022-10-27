import { format } from 'date-fns';
import { useState } from "react";


const Timer = () => {
  const [isClicked, setIsClicked ] = useState(false);
   const handleClick = () => { 
    setIsClicked (!isClicked);
   
  }  
  const breadReady = () => {
    format({calcFinish}, 'yyyy-MM-dd HH:mm')
  }
  const youStart = () => {
    format({calcStart},'yyyy-MM-dd HH:mm')
  }
  return (
    <>
     <p>{isClicked ? `Bread ready to eat at ${breadReady}` : ''}</p> 
     <p>{isClicked ? `You start your first proces at  ${youStart}` : ''}</p>
    </>
  );
}

export default Timer;
