import { useEffect,useRef } from "react";
import { drawCanvas,createPosenet } from "../../posenetUtilities";
import { image } from "@tensorflow/tfjs";
import { pushup } from "../../poses";

export const PushUpTestPage=()=>{
    const imageRef = useRef(null);
    const canvasRef = useRef(null);

    const runPosenet = async () =>{
        const net=await createPosenet();
        console.log(imageRef)
        
        if(imageRef.current){
            const image= imageRef.current;
            const imageWidth= imageRef.current.width;
            const imageHeight= imageRef.current.height;
            const pose=await net.estimateSinglePose(image);
            pushup(pose);
            console.log(pose);
            drawCanvas(pose,image,imageWidth,imageHeight,canvasRef);
          }
    }

    useEffect(()=>{
        const runPosenetteEffect=async ()=>{
            runPosenet();
          };
          runPosenetteEffect();
    },[]);

    return (
        <>
            <img src="/Pose/pushup2.webp"
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
                }}
                ref={imageRef}
            ></img>
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
        
    )
}

export default PushUpTestPage;