import React  from 'react';
import Topnav from '../../components/Navbar/Topnav/Topnavbar'
// import Sidenav from '../../components/Navbar/Sidenav/sidenav'
import Home from '../../components/dashboardpages/Home/Home'
// import Header from '../../components/Navbar/testnav2/Header'
import Testnav from '../../components/Navbar/testnav/Navbar'


function Layout() {
    return (
        <>
        <div class="row mx-0 p-0">
                {/* <Header class="col p-0" /> */}
                {/* <Sidenav class="col-3 p-0"/> */}
                <Testnav/>
                <div className="col p-0">
                    <Topnav class="row mx-0 p-0"/>
                    <div class="row mx-0 p-0">
                     <Home/>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Layout
