import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './style.css'



const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}} id="main" >
      <CDBSidebar textColor="#333" backgroundColor="#fff"  >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} >
        {/* <img className='logo' src={logo} alt="Logo" /> */}
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
           sidebar
           </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu className="content">
            <NavLink exact to="/home" activeClassName="activeClicked" className="link">
              <CDBSidebarMenuItem icon="columns">Homepage</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked" className="link">
              <CDBSidebarMenuItem icon="table">Stories</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked" className="link">
              <CDBSidebarMenuItem icon="user">Income</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked" className="link">
              <CDBSidebarMenuItem icon="chart-line">Inbox</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked" className="link">
              <CDBSidebarMenuItem icon="exclamation-circle">Rank</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked" className="link">
              <CDBSidebarMenuItem icon="exclamation-circle">Stats Centre</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'left' }}>
          <div className='menuitems' style={{ padding: '10px 40px', }}> 
            Piracy Complaints
          </div>
          <div className='menuitems' style={{ padding: '10px 40px', }}>
            Help center
          </div>
          <div className='menuitems' style={{ padding: '10px 40px', }}>
            Settings
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
