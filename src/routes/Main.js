import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import SimpleLayout from "../layout/MainLayout";
import Authentication from "../pages/AdminDashboard/Authentication";
import TicketLanding from "../pages/AdminDashboard/TicketLanding";
import Users from "../pages/AdminDashboard/Users";
import Homepage from "../pages/Homepage";
import IntakeHub from "../pages/IntakeHub";
import Confirmation from "../pages/IntakeHub/Confirmation";
import TicketSupportDesk from "../pages/TicketSupportDesk";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


const routes = createBrowserRouter([
    {
        path: '/dashboard',
        element: <SimpleLayout />,
        children: [
            {
                path: '/dashboard/intakeHub',
                element: <IntakeHub />,
                loading: async() => {
                    return sleep(400)
                }
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin/dashboard',
                element: <TicketLanding />,
                loading: async() => {
                    return sleep(400)
                }
            },
            {
                path: '/admin/users',
                element: <Users />,
                loading: async() => {
                    return sleep(400)
                }
            },
        ]
    },
    {
        path: '/',
        element: <AuthenticationLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />,
                loading: async() => {
                    return sleep(400)
                }
            },
            {
                path: '/requestassistance',
                element: <TicketSupportDesk />,
                loading: async() => {
                    return sleep(400)
                }
            },
            {
                path: '/login',
                element: <Authentication />,
                loading: async() => {
                    return sleep(400)
                }
            },
            {
                path: '/success',
                element: <Confirmation />,
                loading: async() => {
                    return sleep(400)
                }
            }

        ]
    }
]);


export {
    routes
}