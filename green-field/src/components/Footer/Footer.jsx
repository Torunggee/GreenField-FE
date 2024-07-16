import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>모든 농업인들을 위한 "<span className="bold">청춘과 밭</span>"입니다.</p>
        <nav>
          <ul>
            <li>토룽지 : 고예린, 김다은, 박아름</li>
            <li><a href="/privacy">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
