import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/Login.tsx';
import Protected from './layout/Protected.tsx';
import VerifyEmail from './auth/VerifyEmail.tsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/verify_email/:token',
    element: <VerifyEmail/>
  },
  {
    path: '/home',
    element: <Protected/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
