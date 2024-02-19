import Box from '@mui/material/Box';
import Webcam from 'react-webcam';
import { createPosenet,detect } from '../../posenetUtilities';
import { armRaise, legRaise, squats,pushup } from '../../poses';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState,useEffect,useRef,useCallback } from 'react';

export default function WebcamPage(){
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [squatCount,setSquatCount]=useState(0);
    const [singleRepInterval,setSingleRepInterval]=useState(null);
    const [countStandUp,setCountStandUp]=useState(0);
    const [countLegRaise,setCountLegRaise]=useState(0);
    let timer;

  const poseDetectorDelegate=useCallback(async function(pose){
    var res4=await pushup(pose);
  
  })
    const runPosenet = async () =>{
        const net=await createPosenet();
        timer=!timer && setInterval(()=>{
          detect(net,webcamRef,canvasRef,poseDetectorDelegate);
        },1000);
    
        if(countStandUp > 5) clearInterval(timer);
    }
    
    useEffect(()=>{
        const runPosenetteEffect=async ()=>{
          runPosenet();
        };
        runPosenetteEffect();
    
        return () => clearInterval(timer);
    },[countStandUp]);

    return(
    <>
        <Webcam
            ref={webcamRef}
            style={{
            position:'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480
            }}>

        </Webcam>
        <canvas 
            ref={canvasRef}
            style={{
            position:'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: 640,
            height: 480
            }}>
        </canvas>
    </>    
    );

}