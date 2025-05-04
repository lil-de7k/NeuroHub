import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import LessonPage from './pages/LessonPage'
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App