//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
// import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import './style.module.css'

const Layout = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
        <>
        <nav class=""  id="container" sticky="top">
        <ProSidebar collapsed={menuCollapse} sticky="top">
          <SidebarHeader class="row mx-0 heading">

            <a class=" text-muted logotext" href="#" >
              {/* small and big change using menucollapse state */}
              {menuCollapse ? "Logo" : "Big Logo"}
            </a>
          <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              )}
          </div>
          </SidebarHeader>
          <SidebarContent>
          {/* <ul class="navbar-nav pt-0 mr-auto mt-2 mt-lg-0 d-block">
            <li class="nav-item" >
            <a class="nav-link text-muted p-0"  href="#"><i class="fas fa-home" aria-hidden="true"></i><span class="ml-4">Homepage</span></a>
            </li>
            <li class="nav-item" >
            <a class="nav-link text-muted  p-0"  href="#"><i class="fas fa-book "></i><span class="ml-4 pl-1">Stories</span></a>
            </li>
            <li class="nav-item " >
            <a class="nav-link text-muted p-0"  href="#"><i class="fa fa-address-book" aria-hidden="true"></i><span class="ml-4 pl-1">Income</span></a>
            </li>
            <li class="nav-item" >
            <a class="nav-link text-muted p-0"  href="#"><i class="fas fa-chart-pie "></i><span class="ml-4 ">Income</span></a>
            </li>
            <li class="nav-item" >
            <a class="nav-link text-muted p-0"  href="#"><i class="fas fa-grin-hearts "></i><span class="ml-4 pl-1">Inbox</span></a>
            </li>
            <li class="nav-item" >
            <a class="nav-link text-muted p-0"  href="#"><i class="fas fa-home" aria-hidden="true"></i> <span class="ml-4 ">Rank</span></a>
            </li>
                
          </ul> */}
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
            <MenuItem icon={<i class="fas fa-arrow-alt-circle-left    "></i>}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </nav>
        </>
    )
}

export default Layout
