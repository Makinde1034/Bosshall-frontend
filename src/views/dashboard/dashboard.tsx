import React from 'react';
import { Outlet } from 'react-router-dom'
import Nav from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer';

function Dashboard() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Dashboard;
