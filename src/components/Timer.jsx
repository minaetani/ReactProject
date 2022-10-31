import { format } from 'date-fns';


const Timer = ({CalcFinish, CalcStart}) => {
  console.log(CalcFinish, CalcStart);
  const breadReady =
    CalcFinish && format({CalcFinish}, 'yyyy-MM-dd HH:mm');

  const youStart = 
    CalcStart && format(CalcStart,'yyyy-MM-dd HH:mm');
  
  return (
    <>
     <p>{ `Bread is ready to eat at ${breadReady}`}</p> 
     <p>{`You start your first proces at  ${youStart}`}</p>
    </>
  );
}

export default Timer;
