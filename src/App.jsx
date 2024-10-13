import React from 'react'
import Nav from './components/Nav'
// import HomePage from './components/HomePage'
// import PresidentPage from './components/PresidentPage'
// import Timeline from './components/Timeline'
// import UsersPage from './components/UsersPage'
// import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    
      <Nav/>
      
      <Outlet/>
      
      {/* <Footer/> */}
    </>
  )
}

export default App