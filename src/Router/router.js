import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import Home from "../components/Home/Home";
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
            }
        ]
    }
])