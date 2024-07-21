import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QnA from './pages/QnA';
import Together from './pages/Together';
import Community from './pages/Community';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GetUserInfo from './pages/GetUserInfo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TogetherList from './pages/TogetherList';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/together" element={<Together />} />
          <Route path="/together/list" element={<TogetherList />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/getuserinfo" element={<GetUserInfo />} />
        </Routes>
        <Footer/>
        
    </Router>
  );
}

export default App;
