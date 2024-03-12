import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Calendar from './pages/CalendarPage/CalendarPage.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/calendar",
    element: <Calendar/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
