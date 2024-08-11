import React, { useEffect, useRef, useState } from 'react';
import './Counter.css';
import Button from 'react-bootstrap/Button';


function Counter() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null); 

  useEffect(() => {
    startCounter(); 
    return () => clearInterval(intervalRef.current); 
  }, []);

  const startCounter = () => {
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000); 
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setCounter(0);
    startCounter(); 
  };


  return (
    <div>
      <div className='counter mt-5 w-25'>
        <h2>Counting Starts...</h2>
        <h3>{counter}</h3>
        <div className='btn_div mb-5 pb-5'>
          <Button variant="danger" className="btn_1" onClick={stop}>Stop</Button>{' '}
          <Button variant="success" onClick={reset}>Reset</Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default Counter;
