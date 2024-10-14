import React from 'react'
import HomePage from './HomePage'
import PresidentPage from './PresidentPage'
import Timeline from './Timeline'
import Footer from './Footer'
import EventsAndNews from './EventsAndNews'
import SocialStreams from './SocialStreams'
import Journey from './Journey'

const MainPage = () => {
  return (
    <div>
        <HomePage/>
        <PresidentPage/>
        <Journey/>
        <Timeline/>
        <EventsAndNews/>
        <SocialStreams/>
        <Footer/>
    </div>
  )
}

export default MainPage