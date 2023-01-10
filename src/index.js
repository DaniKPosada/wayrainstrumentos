import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Vista1 from './components/Vista1.js';
import Vista2 from './components/Vista2.js';
import Vista3 from './components/Vista3.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router= createBrowserRouter([
  {
      path:'/Vista1',
      element:<Vista1/>
  },
  {
    path:'/Vista2',
    element:<Vista2/>
  },
  {
    path:'/Vista3',
    element:<Vista3/>
  },
  {
      path:'/',
      element:<App/>
  }
  ])
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


