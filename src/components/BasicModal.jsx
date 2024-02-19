
import {Modal,Button} from 'react-bootstrap';

export const BasicModal=({show,handleClose,handleSuccess,labelCancel="Close",labelSuccess="Ok",title,children})=>{
    return(
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {labelCancel}
            </Button>
            <Button variant="primary" onClick={handleSuccess}>{labelSuccess}</Button>
            </Modal.Footer>
        </Modal>
    )
        
    
}


export default BasicModal;