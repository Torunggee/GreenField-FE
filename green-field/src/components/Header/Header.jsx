import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="MyApp Logo" />
          청춘과 밭
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/qna">질문/답변</Link></li>
          <li><Link to="/together">함께농사</Link></li>
          <li><Link to="/community">커뮤니티</Link></li>
          <li><Link to="/login">로그인</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
