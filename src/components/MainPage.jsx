import React from 'react'
import HomePage from './HomePage'
import PresidentPage from './PresidentPage'
import Timeline from './Timeline'
import Footer from './Footer'
import EventsAndNews from './EventsAndNews'
import SocialStreams from './SocialStreams'
import Journey from './Journey'
import VerticalDot from './VerticalDot'

const MainPage = () => {
  return (
    <div>
        <HomePage/>
        <VerticalDot/>
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