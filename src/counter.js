import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
      let timer = null;

    if(timerOn){
        timer = setInterval(() => {
            setCounter(preCounter => preCounter + 1);
           
          }, 1000);
    }else{
        clearInterval(timer);
    }
   
    return () => clearInterval(timer)
    
  }, [timerOn]);

  const reset = () => {
      setCounter(0);
      setTimerOn(false);
  }

  return (
    <div>
      <h1>{counter}</h1>
      {counter === 0 && ( <button onClick={() => setTimerOn(true)}> Start </button>)}
     
      {counter !== 0 && timerOn && ( <button onClick={() => setTimerOn(false)}> Pause </button> )}

      {!timerOn && counter > 0 && ( <button onClick={() => setTimerOn(true)}> Resume </button> )}

      {counter !== 0 && ( <button onClick={reset}> Reset </button> )}


      
    </div>
  );
};

export default Counter;
