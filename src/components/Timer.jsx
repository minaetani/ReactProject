import { format } from 'date-fns';


const Timer = ({calcFinish, calcStart, clicked}) => {
  console.log(calcFinish, calcStart);
  const breadReady = 
    calcFinish && format(calcFinish,"yyyy-MM-dd HH:mm");

  const youStart = 
    calcStart && format(calcStart,"yyyy-MM-dd HH:mm");

  return (
    <>
     <div className='timer'>{ breadReady && `Bread is ready on ${breadReady}`}</div> 
     <div  className='timer'>{ youStart && `You need to start your first process on ${youStart}`}</div>
    </>
  );
}

export default Timer;
