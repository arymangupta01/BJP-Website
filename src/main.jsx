import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import HomePage from './components/HomePage.jsx';
import UsersPage from './components/UsersPage.jsx';
import MainPage from './components/MainPage.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path='/users' element={<UsersPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
