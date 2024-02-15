import MessageToast from "../components/MessageToast";
import { useState } from "react";
import ArmRaiseWebcam from "../poseDetection/armRaiseWebcam";

function CompletePage(){
    const [showMessagePanel,setShowMessagePanel]=useState(false);

    return(
        <>
             {showMessagePanel && 
                (<MessageToast showToast={showMessagePanel}></MessageToast>)
            }
            <ArmRaiseWebcam />
        </>
    )
}

export default CompletePage;