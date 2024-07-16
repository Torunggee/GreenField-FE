import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="MyApp Logo" />
          청춘과 밭
        </NavLink>
      </div>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" activeClassName="active">홈</NavLink></li>
          <li><span>|</span></li>
          <li><NavLink to="/qna" activeClassName="active">질문/답변</NavLink></li>
          <li><span>|</span></li>
          <li><NavLink to="/together" activeClassName="active">함께농사</NavLink></li>
          <li><span>|</span></li>
          <li><NavLink to="/community" activeClassName="active">커뮤니티</NavLink></li>
          <li><span>|</span></li>
          <li><NavLink to="/login" activeClassName="active">로그인</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
