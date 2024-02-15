import React, { useCallback, useEffect, useRef,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WebcamPage from './routes/WebcamPage';
import LegRaiseTestPage from './routes/LegRaiseTestPage';
import SquatTestPage from './routes/SquatTestPage';
import TypesExample from './routes/TypesExample';
import VerticalBar from './routes/VerticalBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PushUpTestPage from './routes/PushUpPage';
import CountdownPro from './components/CountdownPro';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDefault from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Row,Container,Col } from 'react-bootstrap';
import HomePage from './routes/HomePage';
import CompletePage from './routes/CompletePage';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/home",
      element: <WebcamPage/>
    },
    {
      path: "/PersonalData",
      element: <LegRaiseTestPage/>
    },
    {
      path: "/Exercises",
      element: <SquatTestPage/>
    },
    {
      path: "/Routine",
      element: <PushUpTestPage/>
    },
    {
      path: "/Playlist",
      element: <TypesExample/>
    },
    {
      path: "/Results",
      element: <CountdownPro/>
    },
    {
      path:'/CompletePage',
      element: <CompletePage/>
    }
  ]);

 

  return (

    <div className='App'>
      <NavbarDefault></NavbarDefault>
      
      <Container fluid>
        <Row  className="main-row">
          <Col md="auto" className="main-row">
            <Sidebar></Sidebar>
          </Col>
          <Col md="auto" className='mt-5'>
            <RouterProvider router={router} >
            </RouterProvider>
          </Col>
        </Row>
      </Container>
  </div>
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
