import React from 'react'
import HomePage from './HomePage'
import PresidentPage from './PresidentPage'
import Timeline from './Timeline'
import Nav from './Nav'

const MainPage = () => {
  return (
    <div>
        <Nav/>
        <HomePage/>
        <PresidentPage/>
        <Timeline/>
    </div>
  )
}

export default MainPage