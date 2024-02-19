import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from 'styled-components';

const TimerDiv = styled.div`
    font-size: 32px;
`;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper" style={{textAlign: 'center'}}>
      <TimerDiv>{time}</TimerDiv>
      <div>{dimension}</div>
    </div>
  );
};


export default function CountdownPro({onFinishCounter,seconds=60}) {

  const getTimeSeconds = (time) => (seconds - time) | 0;

  if(!onFinishCounter || typeof(onFinishCounter)!="function"){
    onFinishCounter=()=>{
        return {
         shouldRepeat: true,
          delay: 1.5
        } // repeat animation in 1.5 seconds
    }
  }


  return (
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={seconds}
        initialRemainingTime={seconds}
        onComplete={onFinishCounter} 
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
  );
}
