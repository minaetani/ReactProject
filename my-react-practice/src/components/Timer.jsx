import { format } from 'date-fns';


const Timer = ({showCalcFinish, showCalcStart}) => {
  console.log(showCalcFinish, showCalcStart);

  const breadReady = 
    showCalcFinish && format(showCalcFinish, 'yyyy-MM-dd HH:mm');

  const youStart = 
    showCalcStart && format(showCalcStart,'yyyy-MM-dd HH:mm');
  
  return (
    <>
     <p>{ `Bread ready to eat at ${breadReady}`}</p> 
     <p>{`You start your first proces at  ${youStart}`}</p>
    </>
  );
}

export default Timer;
