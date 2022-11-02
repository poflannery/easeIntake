import { createBrowserRouter } from "react-router-dom";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import SimpleLayout from "../layout/MainLayout";
import Authentication from "../pages/Homepage";
import IntakeHub from "../pages/IntakeHub";
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
        path: '/',
        element: <AuthenticationLayout />,
        children: [
            {
                path: '/',
                element: <Authentication />,
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
            }
        ]
    }
]);


export {
    routes
}