import MessageToast from "../components/MessageToast";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import CarouselDark from "../components/CarouselDark";

function HomePage(){
    const [showMessagePanel,setShowMessagePanel]=useState(false);

    return(
        <div>
            {showMessagePanel && 
                (<MessageToast showToast={showMessagePanel}></MessageToast>)
            }
            <CarouselDark></CarouselDark>
            <Button variant="success" onClick={()=>setShowMessagePanel(!showMessagePanel)} >Show Message Toast</Button>
        </div>
    )
}

export default HomePage;