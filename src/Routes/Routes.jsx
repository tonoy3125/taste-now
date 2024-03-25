import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
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