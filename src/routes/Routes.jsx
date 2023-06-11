import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import InstructorPage from "../Pages/Instructor/InstructorPage";
import ClassesPage from "../Pages/Class/ClassesPage";
import Dashboard from "../Layout/Dashboard";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses";
import DashHome from "../Pages/Dashboard/DashHome";
import StudentRoute from "./studentRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'instructor',
                element: <InstructorPage></InstructorPage>
            },
            {
                path: 'classes',
                element: <ClassesPage></ClassesPage>
            },
            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    {
                        path:'/dashboard',
                        element:<DashHome></DashHome>
                    },
                    {
                        path: 'selected-classes',
                        element:<StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
                    },
                ]
            }
        ]
    },
]);