import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Loader from "../components/loader/Loader";
import Error from "../pages/error/Error";
import Apps from '../pages/Apps'
import { fetchResponse, productDetails } from '../loadData/Loader'
import SearchItems from "../pages/searchItems/SearchItems";
import ProductNotFound from "../pages/error/ProductNotFound";
import AppDetails from "../pages/singleApp/AppDetails";
import Installation from "../pages/Installation";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        loader: fetchResponse,
        errorElement: <Error />,
        hydrateFallbackElement:Loader,
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
            {
                path: "/apps/:id",
                loader: productDetails,
                Component: AppDetails,
                errorElement: <ProductNotFound />
            },
            {
                path: "/searchItems",
                Component: SearchItems
            },
            {
                path: "/installation",
                loader: fetchResponse,
                Component: Installation
            }
        ],
    },

    {
        path: "/installation"
    }
])
export { router };