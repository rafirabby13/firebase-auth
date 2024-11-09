/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layouts/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import LoginWithEmailPass from './LoginWithEmailPass/LoginWithEmailPass.jsx';
import SignInWIthEMAIlPAss from './components/signInWithEmailPass/SignInWIthEMAIlPAss.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/SignInEmailPass',
        element: <SignInWIthEMAIlPAss/>
      },
      {
        path: '/loginEmailPass',
        element: <LoginWithEmailPass/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
