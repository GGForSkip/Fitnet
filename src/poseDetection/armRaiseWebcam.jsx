import { armRaise } from "../poses";
import CommonPoseWebcam from "./commonPoseDetection";

function ArmRaiseWebcam(){
    
    return(
        <CommonPoseWebcam exerciseTodo={armRaise} repsTodo={10} resultToUnderstand={"All"} />
    )
}

export default ArmRaiseWebcam;