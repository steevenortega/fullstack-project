import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Layout from './components/Layout';
import About from './views/About';
import Client from './views/Client';
import Company from './views/Company';
import Contract from './views/Contract';
import Payment from './views/Payment';
import Rating from './views/Rating';
import Skill from './views/Skill';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "client",
        element: <Client/>,
        children: [
          {
            // path: "/edit/:id",
            // element: <ClientEdit/>,
          },
        ]
      },
      {
        path: "company",
        element: <Company/>,
      },
      {
        path: "contract",
        element: <Contract/>,
      },
      {
        path: "payment",
        element: <Payment/>,
      },
      {
        path: "rating",
        element: <Rating/>,
      },
      {
        path: "skill",
        element: <Skill/>,
      },
      {
        path: "contact",
        element: <div>Página de contacto de la empresa</div>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)