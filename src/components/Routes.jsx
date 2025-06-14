import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Products from "./Products";
import Blogs from "./Blogs";
import About from "./About";

import Contact from "./Contact";


const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            },{
                path:'products',
                Component: Products
            },{
                path:'blogs',
                Component: Blogs
            },{
                path:'about',
                Component: About
            },
            {
                path:'contact',
                Component: Contact
            }
            
        ]
      
    }
])
export default router