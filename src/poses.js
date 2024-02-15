import { calculateAngle } from './utilities';
import { pointsOnSameXAxis,pointsOnSameYAxis  } from './utilities';
function getBodyPartStats(poses, bodyPartName){
    return poses.keypoints.find((pose) => pose.part === bodyPartName);
}

function checkScore(pose,minVal=0.4){
    return (pose.score > minVal);
}

function checkAngle(angle,minVal=0,maxVal=90){
    return (minVal <= angle  && angle <= maxVal);
}

function checkParallelism(angle,less=180){
    return checkAngle(Math.abs(angle-less),0,10);
}

function logAngle(name,angle){
    console.log(name.concat(": ",angle));
}

function checkRectAngle(origin,point1,point2,tollerance=20){
    var cateto1=Math.sqrt(Math.pow(origin.position.x-point1.position.x,2) + Math.pow(origin.position.y-point1.position.y,2));
    var cateto2=Math.sqrt(Math.pow(origin.position.x-point2.position.x,2) + Math.pow(origin.position.y-point2.position.y,2));
    var ipotenusa=Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
    var cateto3=Math.sqrt(Math.pow(point2.position.x-origin.position.x,2) + Math.pow(point2.position.y-origin.position.y,2));
    return (Math.abs(ipotenusa - cateto3)<=tollerance)
}

export const squats = function(poses){
    
    //ginocchia
    const leftKnee=getBodyPartStats(poses,'leftKnee');
    const rightKnee=getBodyPartStats(poses,'rightKnee');
    //caviglie
    const rightAnkle=getBodyPartStats(poses,'rightAnkle');
    const leftAnkle=getBodyPartStats(poses,'leftAnkle');
    //spalle
    const leftShoulder=getBodyPartStats(poses,'leftShoulder');
    const rightShoulder=getBodyPartStats(poses,'rightShoulder');
    //anche
    const rightHip=getBodyPartStats(poses,'rightHip'); 
    const leftHip=getBodyPartStats(poses,'leftHip');

    //check di avere inidividuato correttamente le parti del corpo

    //check left body part
    var checkLeft= checkScore(leftShoulder) && checkScore(leftAnkle) && checkScore(leftHip) && checkScore(leftKnee);
    var checkRight= checkScore(rightShoulder) && checkScore(rightHip) && checkScore(rightKnee) && checkScore(rightAnkle);
    var sR=checkRectAngle(rightHip,rightKnee,rightAnkle);
    var sL=checkRectAngle(leftHip,leftKnee,leftAnkle);

    if(checkLeft && checkRight){
        if(sR && sL){
            console.log("Squat did");
            return "All";
        }
    }

    //se non ho individuato correttamente le parti del corpo, fail
    return null;
    
}


/*

    function for a routine exercise to do
    params: 
    **function for create interval and detect poses
    **maxTimeToRepeat , param for max time to repeat , optional. default is 10

*/
export const exerciseRoutine=function(detectPoseDelegate,maxTimeToRepeat=10){
    // count for time repeated 
    var repeated=0;
    var intervalForSinglePos=setInterval(function(){

        /* var intervalForDetection=setInterval(function(){
            detectPoseDelegate(intervalForDetection);

        },500); */
        detectPoseDelegate();
        repeated++; // repeat
        if(repeated===maxTimeToRepeat){
            clearInterval(intervalForSinglePos);
        }
    },10000);
}


export const legRaise=function(poses){
   
    var hipPointL=getBodyPartStats(poses,'leftHip');
    var hipPointR=getBodyPartStats(poses,'rightHip');
    var anklePointL=getBodyPartStats(poses,'leftAnkle');
    var anklePointR=getBodyPartStats(poses,'rightAnkle');

    var checkLeft= checkScore(hipPointL) && checkScore(anklePointL);
    var checkRight= checkScore(hipPointR) && checkScore(anklePointR);
    //left
    var sR=checkRectAngle(hipPointR,anklePointR,anklePointL,40);
    var sL=checkRectAngle(hipPointL,anklePointL,anklePointR,40);
    if(checkLeft &&  checkRight){
        if(sL){
            console.log("left leg raise did");
            return "Left";
        }

        if(sR){
            console.log("right leg raise did");
            return "Right";
        }
    }


    return null;
}


export const armRaise=function(poses){
    var wristPointL=getBodyPartStats(poses,'leftWrist');
    var wristPointR=getBodyPartStats(poses,'rightWrist');
    var shoulderPointL=getBodyPartStats(poses,'leftShoulder');
    var shoulderPointR=getBodyPartStats(poses,'rightShoulder');
    var elbowPointL=getBodyPartStats(poses,'leftElbow');
    var elbowPointR=getBodyPartStats(poses,'rightElbow');

    var checkLeft= checkScore(wristPointL) && checkScore(shoulderPointL) && checkScore(elbowPointL);
    var checkRight= checkScore(wristPointR) && checkScore(shoulderPointR) && checkScore(elbowPointR);
    var cL=(wristPointL.position.y < elbowPointL.position.y &&  elbowPointL.position.y <shoulderPointL.position.y);
    var cR=(wristPointR.position.y < elbowPointR.position.y &&  elbowPointR.position.y <shoulderPointR.position.y);

    if(checkRight && checkLeft) {
        
        if(cL && cR) {
            console.log('left and right arm raise');
            return "All";
        }
       
    }else if(checkRight && cR){
        console.log('right arm raise');
        return "Right";
    }else if(checkLeft && cL){
        console.log('left arm raise');
        return "Left";
    }

    return null;
}


export const pushup=function(poses){
   
    var wristPointL=getBodyPartStats(poses,'leftWrist');
    var wristPointR=getBodyPartStats(poses,'rightWrist');
    var elbowPointL=getBodyPartStats(poses,'leftElbow');
    var elbowPointR=getBodyPartStats(poses,'rightElbow');
    var shoulderPointL=getBodyPartStats(poses,'leftShoulder');
    var shoulderPointR=getBodyPartStats(poses,'rightShoulder');

    var checkLeft= checkScore(wristPointL) && checkScore(elbowPointL) && checkScore(shoulderPointL);
    var checkRight= checkScore(wristPointR) && checkScore(elbowPointR) && checkScore(shoulderPointR);
    //left
    var sR=checkRectAngle(wristPointL,elbowPointL,shoulderPointL,40);
    var sL=checkRectAngle(wristPointR,elbowPointR,shoulderPointR,40);
    if(checkLeft || checkRight){
        if(sL || sR){
            console.log("Push Up");
            return "All";
        }
    }


    return null;
}