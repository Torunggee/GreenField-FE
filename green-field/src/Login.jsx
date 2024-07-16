import React, { useState } from 'react';
import './Login.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email: ', email);
        console.log('Password:', password);
    }

    return (
        <div className="login-container">
            <h2>청춘의 밤에 오신 걸 환영해요</h2>
            <img src="/logo.png" alt="청춘과밭"/>
            <p>
                아직 회원이 아니신가요?
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
                />
                <br /> <br />
                <mainbutton type="submit">로그인 하기</mainbutton>
            </form>
            <div className='social-login'>
            </div>
        </div>
    )
}

export default Login;
