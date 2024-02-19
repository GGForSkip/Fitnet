import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDefault from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Row,Container,Col } from 'react-bootstrap';
import router from './routes';
function App() {
  
  return (
    <>
     <div className='App'>
        <NavbarDefault></NavbarDefault>
        
        <Container fluid>
          <Row  className="main-row">
            <Col xs="12" sm="2" className="main-row">
              <Sidebar></Sidebar>
            </Col>
            <Col xs="12" sm="10" className='mt-5'>
              <RouterProvider router={router} >
              </RouterProvider>
            </Col>
          </Row>
        </Container>
      </div>
    </>
   
  );
}

export default App;



   {/*  <Grid xs={4}>
      <Stack direction="row" spacing={2} style={{ marginLeft: "100px"}}>
        <Button variant="contained">Stop</Button>
        <Button variant="contained">Show Results</Button>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Posizione in piedi:
            </Typography>
           
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             {countStandUp}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Gamba in avanti:
            </Typography>
           
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             {countLegRaise}
            </Typography>
          </CardContent>
        </Card>

      </Stack>
    </Grid> */}
