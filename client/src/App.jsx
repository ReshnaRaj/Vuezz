import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import TicketSelection from './pages/Ticket'
import Header from './components/Header'
import Registration from './pages/Registration'
import RegistrationSummary from './pages/RegistrationSummary'
import ThankYou from './pages/ThankYou';
import Ticket from './pages/Ticket';
import Scroll from './components/Scroll';

function App() {
 

  return (
    <>
    <Router>
      <Scroll/>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/summary" element={<RegistrationSummary />} />
        <Route path='/thankyou' element={<ThankYou/>}/>
        <Route path="/" element={<Ticket/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
