import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import InstructorPage from "../Pages/Instructor/InstructorPage";
import ClassesPage from "../Pages/Class/ClassesPage";

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
            }
        ]
    },
]);