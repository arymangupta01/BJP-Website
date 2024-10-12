import React from 'react'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import PresidentPage from './components/PresidentPage'
import Timeline from './components/Timeline'
import UsersPage from './components/UsersPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    
      <Nav/>
      <HomePage/>
      <PresidentPage/>
      <Timeline/>
      <UsersPage/>
      <Footer/>
    </>
  )
}

export default App