import { drawKeypoints,drawSkeleton } from './utilities';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
//Utilities for draw posenet focal points

// Create canvas object
export const drawCanvas = async function(pose,video,videoWidth,videoHeight,canvas){
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose['keypoints'],0.5,ctx)
    drawSkeleton(pose['keypoints'],0.5,ctx)
}

// Create posenet object
//parameters:
//width, height of input resolution 
//scale factor
export const createPosenet = async function(width=640, height=480,scale=0.5) {
    return await posenet.load({
        inputResolution: {width: 640, height: 480},
        scale: 0.5
    });
}
//params
// net , posenet istance
//webcamRef, ref of webcam used, type Webcam
//poseDetectorDelegate delegate to use for understand pose required
//canvasRef  ref of canvas used, type canvasHtml
export const detect=async function(net,webcamRef,canvasRef,poseDetectorDelegate){
    if(webcamRef.current && webcamRef.current.video.readyState===4){
      //Get video properties
      const video= webcamRef.current.video;
      const videoWidth= webcamRef.current.video.videoWidth;
      const videoHeight= webcamRef.current.video.videoHeight;

      //Set width video properties
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Make Detections
      const pose=await net.estimateSinglePose(video);
      await poseDetectorDelegate(pose);
     
      console.log(pose);
      drawCanvas(pose,video,videoWidth,videoHeight,canvasRef);
    }
}