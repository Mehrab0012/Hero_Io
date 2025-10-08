import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                   
            }
        ]

    }
])
export {router};