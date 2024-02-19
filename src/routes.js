import LegRaiseTestPage from './routes/Test/LegRaiseTestPage';
import SquatTestPage from './routes/Test/SquatTestPage';
import TypesExample from './routes/Test/TypesExample';
import {
  createBrowserRouter,
} from "react-router-dom";
import PushUpTestPage from './routes/Test/PushUpPage';
import HomePage from './routes/HomePage';
import CompletePage from './routes/Test/CompletePage';
import { PersonalData } from './routes/PersonalData';
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/home",
      element: <HomePage></HomePage>
    },
    {
      path: "/PersonalData",
      element: <PersonalData/>
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
      element:"<div></div>"
    },
    {
      path:'/CompletePage',
      element: <CompletePage/>
    }
  ]);

export default router;