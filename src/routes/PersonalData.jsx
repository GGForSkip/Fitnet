import { Row,Col,Button } from 'react-bootstrap';
import BasicModal from '../components/BasicModal';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import TableV1 from '../components/TableV1';
import { useState,useRef, useEffect } from 'react';
import axios from 'axios';
import MessageToast from '../components/MessageToast';
import { useNavigate } from "react-router-dom";


export const PersonalData=()=>{
    const [showMessagePanel,setShowMessagePanel]=useState(false);
    const [error,setError]=useState("");
    const [personalInfo,setPersonalInfo]=useState(undefined);
    const onCloseToast=()=> {

        setShowMessagePanel(false);
        setError(undefined);
    }
    const onError=(error)=>setError(error);

    useEffect(()=>{
        axios.post(`/personalInfo/getDetail/`)
        .then((response)=>{
            console.log(response);
            setPersonalInfo(response.data);
        }).catch(function(error){
            setError(error);
        });
    },[]);
    


    return(
        <Row className='mb-5'>
            {showMessagePanel && 
                (<MessageToast showToast={showMessagePanel} onClose={onCloseToast} body={error}></MessageToast>)
            }
            <Col sm={12} md={12}>
                <h1> Personal Data </h1>
            </Col>
            <Col sm={12} md={6} className='mt-5'>
                <BoxRecord onError={onError}/>
                {personalInfo &&
                    <BoxPersonalData onError={onError} personalData={personalInfo} />
                }
                <BoxNotFoundRecord onError={onError} />
            </Col>
            <Col sm={0} md={1}></Col>
            <Col sm={12} md={5} className='mt-5'>
                {personalInfo &&
                    <BoxChangePersonalInformation onError={onError} personalData={personalInfo} />
                }
            </Col>
            
        </Row>
       
    )
}


//#region Records

const BoxRecord=({onError})=>{

    const [records,setRecords]=useState([]);
    const [showModalRecord, setShowModalRecord] = useState(false);
    const handleCloseModal = () => setShowModalRecord(false);
    const handleShowModal = () => setShowModalRecord(true);
    
    useEffect(()=>{
        const userID=2;
        axios.get(`/personalInfo/getRecord/${userID}`)
        .then((response)=>{
            console.log(response);
            setRecords(response.data.records);
        }).catch(function(error){
            onError(error);
        });
       
    },[]);

    return(
        <>
            <h3> Record sets</h3>
            <p class="lead">Show latest 5 records. <span onClick={handleShowModal} className='link'>Click here</span> to see all records</p>
            {records && 
                <ListRecords rows={records.slice(0,5)} />
            }
            <BasicModal
                show={showModalRecord}
                handleClose={handleCloseModal}
                handleSuccess={()=>{}}
                labelCancel="Close"
                labelSuccess="Go Back"
                title="All records"
            >
                {records && 
                    <ListRecords rows={records} />
                }
            </BasicModal>
        </>
    )
}

const ListRecords=({rows})=>{
    return(
        <ListGroup variant="flush">
            {rows.map((item,index)=>{
                return(
                    <SingleListRecord row={item} key={index} />
                );
            })}
        </ListGroup>
    )
}

const SingleListRecord=({row})=>{

    const listIcons=row.icons.map((icon,index)=>{
        return (
            <i className={icon} key={index}></i>
        )
    });

    return(
        <ListGroup.Item style={{background: "#333333",color:"white"}}>
            <div className="d-flex justify-content-between">

                <div className=''>
                    {listIcons}
                </div>   

                <b className="text-uppercase">{row.description}</b>
                <h3 className="red-text-upper">{row.record}</h3>
            </div>
            
        </ListGroup.Item>
    )
}

//#endregion Records

//#region Personal Phisic data
const BoxPersonalData=({onError,personalData})=>{

    const [tableParam,setTableParam]=useState(undefined);

    useEffect(()=>{
        const rowCreator=(data)=>{
            return (
               
                <tr key={data.index}>
                    <td>{data.name}</td>
                    <td>{data.value}</td>
                    <td>{data.misure}</td>
                </tr>
                    
            )
        }

        setTableParam({
            headers:[ 'Name','Value','Misure unity'],
            rows: personalData,
            rowCreator: rowCreator
        })
    },[]);

    return(
        <>
            {tableParam && 
                <div className='mt-5'>
                    <h3>I miei dati fisici</h3>
                    <p class="lead">Dati inseriti e aggiornati all ultima modifica</p>
                        <TableV1 params={tableParam}></TableV1>
                </div>
            }
        </>
    )
}
//#endregion

const BoxNotFoundRecord=({onError})=>{

    const sendEmail=()=>{
        var email="mailto:gianlucagiacometti44@gmail.com?subject=Not%20Found%20Record";
        window.location.href=email;
    }

    return(
        <div class="jumbotron jumbotron-fluid mt-5">
            <div class="container">
                <h1 class="display-4">Did you not find your record?</h1>
                <p class="lead">Please send a email by clicking <span className='email-span' onClick={sendEmail}>on this link</span>. We get you answer and update records in case we 
                did some errors. Thank you</p>
            </div>
        </div>
    )
}


const BoxChangePersonalInformation=({onError,personalData})=>{
    const [showInputValue,setShowInputValue]=useState(false);
    const [disableSave,setDisableSave]=useState(true);
    const [comboOptions,setComboOptions]=useState(undefined);
    const comboInfo=useRef(null);
    const inpuVal=useRef(null);
    const [input,setInput]=useState(undefined);
    const navigate = useNavigate();
    const onChangeInfoCombo=(event)=>{
        if(event && event.target && event.target.value && event.target.value!=="-1"){
            setShowInputValue(true);
            var el=personalData.filter((val)=>{
                return val.name===event.target.value;
            });
            if(el && el.length>0){
                setInput(el[0]);
            }
            
        }else{
            setShowInputValue(false);
            setInput(undefined);
        }
    }
    const isValueChanged=(event)=>{
        if(event && event.target && event.target.value && event.target.value!=="" && event.target.value!==undefined){
            setDisableSave(false);
        }else{
            setDisableSave(true);
        }
    }

    const update=()=>{
        var toPass={
            name: comboInfo.current.value,
            value: inpuVal.current.value
        }

        axios.post("/personalInfo/updateInfo",toPass)
        .then((response)=>{
            navigate(0);
        }).catch((error)=>{
            onError(error);
        })
    }

    useEffect(()=>{
       
        setComboOptions(
            personalData.map((data,index)=>{
                return(
                    <option value={data.name} key={index}>{data.name}</option>
                )
            })
        )
    },[])
    return(
        <>
            <h3> Change your personal information</h3>
            <p className="lead"> Informations will be updated as soon as possible</p>
            <Row>

                <Col sm={12} md={8}>
                    <Form.Group className="mb-3" controlId="comboWithInfo">
                        <Form.Select aria-label="Default select example" ref={comboInfo} onChange={onChangeInfoCombo}>
                            <option value="-1">Open this select menu</option>
                            {comboOptions}
                        </Form.Select>
                    </Form.Group>
                </Col>
                {showInputValue && input &&
                    <>
                        <Col sm={12} md={8}>
                            <Form.Group className="mb-3" controlId="infoValue">
                                <Form.Label><span>{input.name}</span></Form.Label>
                                <Form.Control type="number" ref={inpuVal} defaultValue={input.value} onChange={isValueChanged} placeholder="Insert value..." />
                            </Form.Group>
                            <Button variant="warning" disabled={disableSave} onClick={update}>Set new value</Button>
                        </Col>
                    </>
                    
                }
            </Row>
        </>
       
    )
}