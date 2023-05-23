import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../AuthenticationPart/Login";
import SignUp from "../AuthenticationPart/SignUp";
import AddToys from "../Shared/NavComponents/AddToys";
import MyToys from "../Shared/NavComponents/MyToys/MyToys";
import Blogs from "../Shared/NavComponents/Blogs";
import PrivateRoute from "../AuthenticationPart/PrivateRoute";
import AllToys from "../Shared/NavComponents/AllToys/AllToys";
import SingleToy from "../Shared/NavComponents/SingleToyDetails/SingleToy";
import UpdateToy from "../Shared/NavComponents/MyToys/UpdateToy/UpdateToy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: '/addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-server-ten.vercel.app/toy/${params.id}`)
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-server-ten.vercel.app/toy/${params.id}`)
            },
        ]
    },
]);