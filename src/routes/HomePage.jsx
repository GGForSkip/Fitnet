import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColumnChart from "../charts/ColumnChart"
import OrgChart from '../charts/OrgChart';
import CardCTA from '../components/CardCTA';




function HomePage(){
   
    return(
       <Container>
        
           
             <Row className='align-items-center'>

                <Col sm={12} md={12} className='text-center mb-5'>
                    <h1>🆆🅴🅻🅲🅾🅼🅴 🅱🅰🅲🅺 🆃🅾 🅵🅸🆃🅽🅴🆃</h1>                 
                </Col>

                <Col sm={12} md={12} className='text-left mb-5'> 
                    <h2>█▓▒▒░░░What can i do today?░░░▒▒▓█</h2>                 
                </Col>
            </Row>

            <Row className='align-items-center'>
                <Col sm={12} md={4}>
                    <CardCTA
                        imageUrl="/home/StartWorkout.jpg"
                        title="Workout now!"
                        buttonDescr="Complete today schedule"
                        btnLink="/workoutToday"
                        style={{
                            maxHeight: "190px"
                        }}
                    >

                    </CardCTA>
                </Col>
                <Col sm={12} md={4}>
                    <CardCTA
                        imageUrl="/home/Piano.jpg"
                        title="Manage your training!"
                        buttonDescr="Manage weekly workouts"
                        btnLink="/workoutManage"
                        style={{
                            maxHeight: "190px"
                        }}
                    ></CardCTA>
                </Col>
                <Col sm={12} md={4}>
                    <CardCTA
                        imageUrl="/home/gruppo.jpg"
                        title="You VS other athlete!"
                        buttonDescr="Improve your abilities knowing new people"
                        btnLink="/workoutChallenge"
                        style={{
                            maxHeight: "190px"
                        }}
                    ></CardCTA>
                </Col>
            </Row>

            <Row className='align-items-center mt-5 text-center'>
                <Col sm={12} md={6}>
                    <h2>▀▄▀▄▀▄Last week results▄▀▄▀▄▀</h2>                 
                </Col>
                <Col sm={12} md={6}>
                    <h2>ʏᴏᴜʀ ᴡᴇᴇᴋ ᴛʀᴀɪɴɪɴɢꜱ</h2>
                </Col> 
            </Row>
            <Row className='align-items-center'>
                <Col sm={12} md={6} className='mb-5'>
                    <Col sm={12}>
                        <ColumnChart></ColumnChart>
                    </Col>  
                </Col>
                <Col sm={12} md={6} className='mb-5'> 
                    <Col sm={12}>
                        <OrgChart></OrgChart>
                    </Col>  
                </Col>
            </Row>

           
       </Container>
    )
}

export default HomePage;