import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';

import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Education } from './Components/Education';
import { WorkExperience } from './Components/WorkExperience';
import { Skills } from './Components/Skills';
import { Contacts } from './Components/Contacts';
import { ErrorPage } from './Components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/divyansh-resume/",
      element: <Navbar />,
      children: [
        {index: true, element: <Home/>},
        { path: "education", element: <Education/> },
        { path: "work-experience", element: <WorkExperience/> },
        { path: "skills", element: <Skills/> },
        { path: "contacts", element: <Contacts/> },
      ],
      errorElement:<ErrorPage/>
    }

  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
