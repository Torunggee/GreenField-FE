import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QnA from './pages/QnA';
import Together from './pages/Together';
import Community from './pages/Community';
import Login from './pages/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/together" element={<Together />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
        
    </Router>
  );
}

export default App;
