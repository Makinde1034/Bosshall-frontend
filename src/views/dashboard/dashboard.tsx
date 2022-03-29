import React from 'react';
import { Outlet } from 'react-router-dom'
import Nav from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer';
import SideNav from '../../components/sideNav/sideNav'
import MobileSearch from '../../components/mobileSearch/mobileSearch';
import DeleteModal from '../../components/deleteModal/deleteModal';
import style from './dashboard.module.scss'

 
function Dashboard() {
  
  return (
    <div className={style.dashboard}>
      <Nav />
      <Outlet />
      <Footer />
      {/* absolute component  */}
      <SideNav />
      <MobileSearch />
      <DeleteModal />
    </div>
  )
}

export default Dashboard;
