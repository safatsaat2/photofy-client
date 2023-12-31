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
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import PrivateRoute from "./PrivateRoute";
import InstructorClasses from "../Pages/Dashboard/InstructorMyClasses/InstructorClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UpdateAClass from "../Pages/Dashboard/UpdateAClass/UpdateAClass";
import Feedback from "../Pages/Dashboard/Feedback/Feedback";
import NotFound from "../Pages/Slider/NotFound/NotFound";

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
                path: 'login',
                element: <Login></Login>
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
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashHome></DashHome>
                    },
                    {
                        path: 'selected-classes',
                        element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
                    },
                    {
                        path:'selected-classes/payment',
                        element:<StudentRoute><Payment></Payment></StudentRoute>
                    },
                    {
                        path: 'manage-users',
                        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
                    },
                    {
                        path: 'manage-classes',
                        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
                    },
                    {
                        path: 'manage-classes/feedback',
                        element:<AdminRoute><Feedback></Feedback></AdminRoute>
                    },
                    {
                        path: 'addaclass',
                        element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
                    },
                    {
                        path: 'instructor-classes',
                        element: <InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
                    },
                    {
                        path:'instructor-classes/update-class',
                        element:<InstructorRoute><UpdateAClass></UpdateAClass></InstructorRoute>
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element:<NotFound></NotFound>
    }
]);