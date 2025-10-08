import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Loader from "../components/loader/Loader";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        hydrateFallbackElement:<Loader/> ,
        errorElement:<Error/>,
        children: [
            {
                index:true,
                loader: async ()=>{
                    const loadData =await fetch('./data.json')
                    const data = await loadData.json();
                    return {data};
                },
                Component: Home
            }
        ],
    },
    {
        path: "/apps"
        
    },
    {
        path: "/installation"
    }
])
export {router};