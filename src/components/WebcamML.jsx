
import Webcam from 'react-webcam';
import { createPosenet,detect } from '../posenetUtilities';
import { armRaise, legRaise, squats,pushup } from '../poses';
import { useState,useEffect,useRef,useCallback } from 'react';

export default function WebcamML({webcamRef,canvasRef}){
    
    
    useEffect(()=>{
        if(!webcamRef){
          throw new Error('webcamRef not defined');
        }
        if(!canvasRef) {
          throw new Error('webcamRef not defined');
        }
    },[webcamRef,canvasRef]);

    return(
      <>
        <Webcam
            ref={webcamRef}
            /* style={{
              position:'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              textAlign: 'right',
              zIndex: 9,
              width: 640,
              height: 480
              
            }} */
        >
        </Webcam>
        <canvas 
            ref={canvasRef}
             style={{
              position:'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              textAlign: 'right',
              zIndex: 9,
              width: 640,
              height: 480
              
            }} 
        >
        </canvas>
    </>    
    );

}