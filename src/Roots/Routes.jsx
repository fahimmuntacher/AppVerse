import { createBrowserRouter } from "react-router";
import RootLayouts from "./RootLayouts/RootLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import App from "../Pages/App/App";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Install from "../Pages/Install/Install";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <RootLayouts></RootLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/apps",
                element: <App></App>
            },
            {
                path: "/apps/app-details/:id",
                element: <AppDetails></AppDetails>
            },
            {
                path: "/installation",
                element: <Install></Install>
            }

        ]
    }
])