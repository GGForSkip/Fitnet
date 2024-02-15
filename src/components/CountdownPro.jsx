import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from 'styled-components';

const minuteSeconds = 60;

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

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;

export default function CountdownPro() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;

  return (
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
        
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
  );
}
