import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import AllServices from "../components/AllServices/AllServices";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import Review from "../components/Review/Review";
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
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/myreview",
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: "/addservice",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/review/:id",
                loader: ({ params }) => {
                  return fetch(`http://localhost:5000/allservices/${params.id}`)  
                },
                element: <PrivateRoute><Review></Review></PrivateRoute>
            }
        ]
    }
])