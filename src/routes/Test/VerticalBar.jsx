import { clear } from "localforage";
import { useCallback, useEffect,useState,useRef} from "react";
import { ReactCountdownClock } from "react-countdown-clock"
import styled,{ keyframes } from 'styled-components'
export const  VerticalBar=()=>{
// Create a button variable and add CSS

    const move = keyframes`
        0% {
            transform: translate3d(0%, 0, 0)
        }
        60% {
            transform: translate3d(60%, 0, 0)
        }
        100% {
            transform: translate3d(100%, 0, 0)
        }
    `;

    const Section = styled.div`
        margin:0 auto;
        height:400px;
        position:relative;
        padding:0
    `;

    const Span = styled.span`
        border: 1px solid white;
        border-radius: 5px;
	    right: 50%;
	    height: 15px;
	    position: absolute;
	    overflow: hidden;
        width:500px;
        transform: rotate(90deg);
        tranform-origin:50% 50%;
        &:before {
            position: absolute;
	        top: 0;
	        left: 0;
	        right: 0;
	        bottom: 0;
	        content: "";
            background: #ffffff3b;
        }
        &:after {
            position: absolute;
	        top: 0;
	        left: 0;
	        right: 0;
	        bottom: 0;
	        content: "";
            background: #FFD92A;
	        animation: ${move} 60s infinite
        }
    `;

    
   
    return (
        <Span></Span>
    )
}

export default VerticalBar