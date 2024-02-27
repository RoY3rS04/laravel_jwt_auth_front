import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './auth/Register.tsx';
import Protected from './layout/Protected.tsx';
import VerifyEmail from './auth/VerifyEmail.tsx';
import Login from './auth/Login.tsx';
import Home from './Pages/Home.tsx';
import Profile from './Pages/Profile.tsx';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/verify_email/:token',
    element: <VerifyEmail/>
  },
  {
    path: '/',
    element: <Protected />,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/profile',
        element: <Profile/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
