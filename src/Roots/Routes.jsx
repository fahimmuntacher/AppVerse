import { createBrowserRouter } from "react-router";
import RootLayouts from "./RootLayouts/RootLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import App from "../Pages/App/App";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Installation from "../Pages/Install/Installation";
import AppDetailsErr from "../Pages/ErrorPage/AppDetailsErr";

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
                path: "/app-details/:id",
                element: <AppDetails></AppDetails>,
                errorElement: <AppDetailsErr></AppDetailsErr>
            },
            {
                path: "/installation",
                element: <Installation></Installation>
            }

        ]
    }
])