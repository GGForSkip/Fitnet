import MessageToast from "../../components/MessageToast";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import CountdownPro from "../../components/CountdownPro";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage(){
    const [showMessagePanel,setShowMessagePanel]=useState(false);
    const [bodyMessageToast,setBodyMessageToast]=useState("New toast message");
    const onClose=()=>{
        setShowMessagePanel(!showMessagePanel)
    }

    const onFinishCounter=()=>{
        setBodyMessageToast("Counter finished");
        setShowMessagePanel(true);
        return {
            shouldRepeat: true,
             delay: 1.5
        } // repeat animation in 1.5 seconds
    }

    return(
        <div>
            {showMessagePanel && 
                (<MessageToast show={showMessagePanel} body={bodyMessageToast} onClose={onClose}></MessageToast>)
            }
            <CountdownPro onFinishCounter={onFinishCounter} seconds={40}></CountdownPro>
            <Button variant="success" onClick={onClose} >Show Message Toast</Button>
        </div>
    )
}

export default HomePage;