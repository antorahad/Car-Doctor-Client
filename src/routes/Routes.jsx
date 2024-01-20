import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
        {
          path: 'checkout/:id',
          element: <Checkout/>,
          loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`)
        }
      ]
    },
  ]);

export default router