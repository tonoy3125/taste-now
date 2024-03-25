import { createBrowserRouter } from "react-router-dom";


import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../Layout/ErrorElement/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorElement></ErrorElement>,
        element: <Root></Root>,
        children: [
            {

                path: "/",
                element: <Home></Home>
            }
        ]
    }
]
)

export default router;