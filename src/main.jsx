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
import SignUp from './components/Shares/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
   path: "/login",
   element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
   }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
      </StrictMode>,
)
