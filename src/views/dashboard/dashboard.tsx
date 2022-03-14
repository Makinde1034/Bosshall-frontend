import React from 'react';
import { Outlet } from 'react-router-dom'
import Nav from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer';
import SideNav from '../../components/sideNav/sideNav'

function Dashboard() {
  
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      <SideNav />
    </div>
  )
}

export default Dashboard;
