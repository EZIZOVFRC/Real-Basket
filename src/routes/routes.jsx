
import SiteRoot from "../pages/site/SiteRoot";
import Home from '../pages/site/Home/Home';
import Shop from '../pages/site/Shop/Shop';
import Basket from '../pages/site/Basket/Basket';
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

import Products from "../pages/admin/Products/Products";
import Detail from "../pages/site/Detail/Detail";
import AddPage from './../pages/admin/AddPage/AddPage';

const ROUTES =[{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },{
        path:'shop',
        element:<Shop/>
    },{
        path:'basket',
        element:<Basket/>
    },{
        path:'details',
        element:<Detail/>
    }]

},{
    path:'/admin',
    element:<AdminRoot/>,
    children:[{
        path:'',
        element:<Dashboard/>
    },{
        path:'add',
        element:<AddPage/>
    },{
        path:'products',
        element:<Products/>
    }]
}]

export default ROUTES