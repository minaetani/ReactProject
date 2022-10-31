import { format } from 'date-fns';


const Timer = ({calcFinish, calcStart}) => {
  console.log(calcFinish, calcStart);
  const breadReady =
    calcFinish && format({calcFinish}, 'yyyy-MM-dd HH:mm');

  const youStart = 
    calcStart && format(calcStart,'yyyy-MM-dd HH:mm');
  
  return (
    <>
     <p>{  `Bread is ready to eat at ${breadReady}`}</p> 
     <p>{  `You start your first proces at  ${youStart}`}</p>
    </>
  );
}

export default Timer;
