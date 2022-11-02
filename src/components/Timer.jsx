import { format } from 'date-fns';


const Timer = ({calcFinish, calcStart, clicked}) => {
  console.log(calcFinish, calcStart);
  const breadReady = 
    calcFinish && format(calcFinish,"yyyy-MM-dd HH:mm");

  const youStart = 
    calcStart && format(calcStart,"yyyy-MM-dd HH:mm");

  return (
    <>
     <p>{ breadReady && `Bread is ready at ${breadReady}`}</p> 
     <p>{ youStart && `You need to start your first process at ${youStart}`}</p>
    </>
  );
}

export default Timer;
