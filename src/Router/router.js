import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/allservices",
                loader: () => {
                    return fetch("http://localhost:5000/allservices")
                },
                element: <AllServices></AllServices>
            },
            {
                path: "/allservices/:id",
                loader: ({ params }) => {
                  return fetch(`http://localhost:5000/allservices/${params.id}`)  
                },
                element: <ServiceDetail></ServiceDetail>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])