import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Components/Shared/Login/Login";
import Register from "../Components/Shared/Register/Register";
import AllContest from "../Pages/AllContest/AllContest";
import SinglePage from "../Pages/AllContest/SinglePage/SinglePage";
import PrivateRoutes from "./PrivateRoutes";
import PaymentDetails from "../Pages/Payment/PaymentDetails";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import AddContest from "../Pages/Dashboard/Modaretor/AddContest";
import ContestList from "../Pages/Dashboard/Modaretor/ContestList";
import Profile from "../Pages/Dashboard/Both/Profile";
// import Dashboard from "../Layout/Dashboard/Dashboard";
// import Participated from "../Pages/Dashboard/Participated/Participated";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://contest-hub-server-hazel.vercel.app/contest')
            },
            {
                path: '/allContest',
                element: <AllContest></AllContest>,
                loader: () => fetch('https://contest-hub-server-hazel.vercel.app/allContest')
            },
            {
                path: '/singleContest/:id',
                element:<PrivateRoutes>
                    <SinglePage></SinglePage>
                </PrivateRoutes>,
                loader: ({params}) => fetch(`https://contest-hub-server-hazel.vercel.app/contest/${params.id}`)
            },
            {
                path: '/contestDetails/:id',
                element: <PaymentDetails></PaymentDetails>
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
    },
    // {
    //     path: 'dashboard',
        // element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    //     children: [
            // {
            //     path: 'participated',
            //     element: <Participated></Participated>
            // },
    //         // admin routes 
    //         
    //     ]
    // }
    {
        path: 'dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: 'addContest',
                element: <AddContest/>
            },
            {
                path: "contestList",
                element: <ContestList/>,
            
            },
            {
                path: 'profile',
                element: <PrivateRoutes><Profile/></PrivateRoutes>
            },
            {
                            path: 'user',
                             element: <AllUser></AllUser>
            }
        ]
    }
])

export default Router;