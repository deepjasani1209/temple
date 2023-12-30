import React from 'react'
import NavbarSign from '../checkoutform/NavbarSign'
import NavigationBar from '../checkoutform/NavigationBar'
import HomeNavbar from '../checkoutform/HomeNavbar'
import Submittedform from './Submittedform'
import Infromation from './Infromation'
import Update from '../checkoutform/Update'
import Footer from '../checkoutform/Footer'

function Aftercheck() {
  return (
    <>
      <NavbarSign />
      <NavigationBar />
      <HomeNavbar />
      <Submittedform />
      <Infromation />
      <Update />
      <Footer />
    </>
  )
}

export default Aftercheck
