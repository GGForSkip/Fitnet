import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

/* const positionsOptions=
[
    'top-start',
    'top-center',
    'top-end',
    'middle-start',
    'middle-center',
    'middle-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
]; */

/*[
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ]*/

function MessageToast({ position ='top-end',variant="Primary", body="Message Toast"}) {

    const [show, setShow] = useState(true);

    return (
        
            <ToastContainer
            className="p-3"
            position={position}
            style={{ zIndex: 1 }}
            >
            <Toast
                onClose={() => setShow(false)} 
                show={show} 
                delay={3000} 
                autohide
                bg={variant.toLowerCase()}
            >
                <Toast.Header closeButton={true}>
                    <strong className="me-auto">Message</strong>
                </Toast.Header>
                <Toast.Body>{body}</Toast.Body>
            </Toast>
            </ToastContainer>
        
    );
}

export default MessageToast;