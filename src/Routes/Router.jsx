import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Components/Shared/Login/Login";
import Register from "../Components/Shared/Register/Register";
import AllContest from "../Pages/AllContest/AllContest";
import SinglePage from "../Pages/AllContest/SinglePage/SinglePage";
import PrivateRoutes from "./PrivateRoutes";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:4000/contest')
            },
            {
                path: '/allContest',
                element: <AllContest></AllContest>,
                loader: () => fetch('http://localhost:4000/allContest')
            },
            {
                path: '/singleContest/:id',
                element:<PrivateRoutes>
                    <SinglePage></SinglePage>
                </PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:4000/contest/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;