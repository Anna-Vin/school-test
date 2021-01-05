import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Timer = () => {
  const [seconds, setSeconds] = useState(120);
  const [timer, setTimer] = useState(null);
  let history = useHistory();

  useEffect(() => {
    if (!timer) {
      setTimer(setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
        }
      }, 1000));
    }

    if (!seconds) {
      setTimer(null);
      clearTimeout(timer);
      history.push(`/result`);
    }
    // eslint-disable-next-line
  }, [seconds]);

  return (
    <div className="app">
      <div className="timer">
        <p>{seconds} сек</p>
      </div>
    </div>
  );
};

export default Timer;