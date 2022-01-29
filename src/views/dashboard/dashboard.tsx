import React from 'react';
import { Outlet } from 'react-router-dom'
import Nav from '../../components/navigation/navigation'

function Dashboard() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Dashboard;
