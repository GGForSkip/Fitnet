import WebcamML from "../components/WebcamML";
import CountdownPro from "../components/CountdownPro";
import CounterCard from "../components/CounterCard";
import { useState,useRef,useCallback,useEffect } from "react";
import { Alert } from "react-bootstrap";
import { detect,createPosenet } from "../posenetUtilities";

function CommonPoseWebcam({ repsTodo=10,exerciseTodo=()=>{},resultToUnderstand="All",delay=3000}){
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [armRaiseCount,setArmRaiseCount] = useState(0);
    const [showSuccess,setShowSuccess] = useState(false);
    

    const poseDetectorDelegate=useCallback(async function(pose){
        var res=await exerciseTodo(pose);
        if(res!=null){
            if(res==resultToUnderstand){
                setArmRaiseCount(armRaiseCount+1);
            }
        }
    },[]);

   
    
    useEffect(()=>{
        let timer;
        const runPosenet = async () =>{
            const net=await createPosenet();
            timer=!timer && setInterval(()=>{
              detect(net,webcamRef,canvasRef,poseDetectorDelegate);
            },delay);
        
            if(armRaiseCount > repsTodo){
                clearInterval(timer);
                setShowSuccess(true);
            } 
        }
        const runPosenetteEffect=async ()=>{
          runPosenet();
        };
        runPosenetteEffect();
    
        return () => clearInterval(timer);
    },[armRaiseCount, showSuccess]);


    return(
        <>
             <div className=" d-flex flex-row-reverse"> 
                <div className="">
                    <CounterCard />
                    <CounterCard/>
                    <p> Ripetizioni eseguite: {armRaiseCount}</p>
                </div>
                
                <div style={{
                    position:'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    right: "100px",
                    textAlign: 'right',
                    zIndex: 8,
                    width: 640,
                    height: 480
                    }}
                >
                    <WebcamML webcamRef={webcamRef} canvasRef={canvasRef}></WebcamML>
                </div>
                
                {!showSuccess &&
                    <div className="" 
                        style={{
                            position:'absolute',                       
                            right: "100px",
                            zIndex: 8
                    }}>
                        <CountdownPro/>
                    </div>
                }
                
            </div>
            {showSuccess &&
                <div className=" d-flex flex-row-reverse">
                    <Alert key='success' variant='success'>
                        You complete the exercise!
                    </Alert>
                </div>
            }
        </>
    )
}

export default CommonPoseWebcam;