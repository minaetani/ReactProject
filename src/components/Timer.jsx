import { parseISO } from 'date-fns';


const Timer = ({calcFinish, calcStart, clicked}) => {
  console.log(calcFinish, calcStart);
  const breadReady = 
    calcFinish && parseISO(calcFinish);

  const youStart = 
    calcStart && parseISO(calcStart);
  
  return (
    <>
     <p>{ clicked ? `Bread is ready to eat at ${breadReady}` : ''}</p> 
     <p>{ clicked ? `You start your first proces at  ${youStart}`: ''}</p>
    </>
  );
}

export default Timer;
