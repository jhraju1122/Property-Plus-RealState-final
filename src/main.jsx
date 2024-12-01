import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import Login from './components/Shares/Login/Login.jsx';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    patha: "/login",
    element: <Login></Login>,
  } ,
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      </StrictMode>,
)
