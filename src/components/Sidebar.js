import SidebarItem from './SidebarItem';

import {Link} from 'react-router-dom'

import Home from '../assets/images/Home.png'
import Team from '../assets/images/Team.png'
import Clients from '../assets/images/Clients.png'
import Products from '../assets/images/Products.png'
import Signout from '../assets/images/Signout.png'


const Sidebar = ({active}) => {

    return (
        <div className="sidebar view">
            <h2 className="logo"> Pellsea Mobile </h2>
            <div className="menu_divider"></div><br/>
            <Link to="/" className={"sidebar_item " +active.replace("_home", "active_menu")}> <SidebarItem icon={Home} name="Home" /> </Link>
            <Link to="/team" className={"sidebar_item " +active.replace("_team", "active_menu")}> <SidebarItem icon={Team} name="Team Members" /> </Link>
            <Link to="/clients" className={"sidebar_item " +active.replace("_clients", "active_menu")}> <SidebarItem icon={Clients} name="Clients" /> </Link>
            <Link to="/products" className={"sidebar_item " +active.replace("_products", "active_menu")}> <SidebarItem icon={Products} name="Products" /> </Link>
            <br/><div className="menu_divider"></div>
            <br/>
            <br/>
            <Link to="/signout" className="sidebar_item"><SidebarItem icon={Signout} name="Sign Out" /></Link>
            <br/>
            <br/>
            <div className="menu_divider"></div>
        </div>
    )
}

export default Sidebar
