import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blog/Blog";
import CustomReview from "../components/CustomReview/CustomReview";
import Error from "../components/Error/Error";
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
        path: "/", element: <Main></Main>, errorElement:<Error></Error>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/allservices",
                loader: () => {
                    return fetch("https://assignment11-server-side.vercel.app/allservices")
                },
                element: <AllServices></AllServices>
            },
            {
                path: "/allservices/:id",
                loader: ({ params }) => {
                  return fetch(`https://assignment11-server-side.vercel.app/allservices/${params.id}`)  
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
                  return fetch(`https://assignment11-server-side.vercel.app/allservices/${params.id}`)  
                },
                element: <PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path: '/customreview/:id',
                loader: ({params}) => {
                  return fetch(`https://assignment11-server-side.vercel.app/allservices/${params.id}`) 
                },
                element: <PrivateRoute><CustomReview></CustomReview></PrivateRoute>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    }
])