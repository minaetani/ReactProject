import { format } from 'date-fns';


const Timer = () => {
  const breadReady = () => {
    format({showCalcFinish}, 'yyyy-MM-dd HH:mm')
  }
  const youStart = () => {
    format({showCalcStart},'yyyy-MM-dd HH:mm')
  }
  return (
    <>
     <p>{isClicked ? `Bread ready to eat at ${breadReady}` : ''}</p> 
     <p>{isClicked ? `You start your first proces at  ${youStart}` : ''}</p>
    </>
  );
}

export default Timer;
