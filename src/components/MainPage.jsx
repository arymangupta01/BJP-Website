import React from 'react'
import HomePage from './HomePage'
import PresidentPage from './PresidentPage'
import Timeline from './Timeline'
import Nav from './Nav'
// import Footer from './Footer'
import EventsAndNews from './EventsAndNews'

const MainPage = () => {
  return (
    <div>
        <Nav/>
        <HomePage/>
        <PresidentPage/>
        <Timeline/>
        <EventsAndNews/>
        {/* <Footer/> */}
    </div>
  )
}

export default MainPage