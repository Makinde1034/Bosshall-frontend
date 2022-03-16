import React from 'react';
import { Outlet } from 'react-router-dom'
import Nav from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer';
import SideNav from '../../components/sideNav/sideNav'
import MobileSearch from '../../components/mobileSearch/mobileSearch';
 
function Dashboard() {
  
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      {/* absolute component  */}
      <SideNav />
      <MobileSearch />
    </div>
  )
}

export default Dashboard;
