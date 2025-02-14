import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Components/HomeLayout";
import CategoryNews from "../Components/Pages/CategoryNews";
import AuthLayout from "../Components/Layout-Components/AuthLayout";
import Login from "../Components/Pages/Login";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: " ",
                element: <Navigate to="/category/01"></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) =>
                    fetch(
                        `https://openapi.programming-hero.com/api/news/category/${params.id}`
                    ),

            }
        ]
    },
    {
        path: "/news",
        element: <h1>News Layout</h1>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login> ,
            },
            {
                path: "/auth/register",
                element: <h1>Register</h1>,
            },
        ],
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default routes;