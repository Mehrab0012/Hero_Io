import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Loader from "../components/loader/Loader";
import Error from "../pages/error/Error";
import fetchResponse from "../loadData/Loader";
import Apps from '../pages/Apps'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        hydrateFallbackElement: <Loader />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                // loader: async ()=>{
                //     const loadData =await fetch('./data.json')
                //     const data = await loadData.json();
                //     return {data};
                // },
                loader: fetchResponse,
                Component: Home
            },
            {
                path: "/apps",
                loader: fetchResponse,
                Component: Apps
            },
        ],
    },

    {
        path: "/installation"
    }
])
export { router };