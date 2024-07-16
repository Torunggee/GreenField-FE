import React, { useState } from 'react';
import Container from '../components/Container/Container';
import '../Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
      e.preventDefault();
      console.log('Email: ', email);
      console.log('Password:', password);
  }

  return (
    <Container className="container">
      <div className="login-container">
        <h2>청춘과 밭에 오신 걸 환영해요</h2>
        <img src="/logo.png" alt="청춘과밭"/>
        <p>
            아직 회원이 아니신가요?
            <Link to="/signup" className="signup-link">회원가입 하기</Link>
        </p>
        <form onSubmit={handleLogin}>
          <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <br />
          <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          /><br /> <br />
          <button>로그인 하기</button>
        </form><br />
        <div className='social-login'>
          <button className='google'>구글로 로그인</button>
        </div><br />
      </div>
    </Container>
  );
}

export default Login;
