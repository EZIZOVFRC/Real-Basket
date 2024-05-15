import React, { Fragment } from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/Footer'

function AdminRoot() {
  return (
    <Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
    </Fragment>
  )
}

export default AdminRoot
