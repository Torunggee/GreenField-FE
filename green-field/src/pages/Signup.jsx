import React, { useState } from 'react';
import Container from '../components/Container/Container';
import '../Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    /*회원가입 불가한 사항들 error처리 */
    const handleSignup = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) {
        newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    } /*else if ( 중복 이메일 검사 ) {
        newErrors.email = '이메일이 중복입니다.';
    }*/

    if (!password) {
        newErrors.password = '비밀번호를 입력해주세요.';
    } else if (password.length < 6) {
        newErrors.password = '비밀번호는 최소 6자리 이상이어야 합니다.';
    }

    if (password !== confirmPassword) {
        newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    // 회원가입 로직
    console.log('회원가입 성공:', { email, password });
    };

    return (
        <Container>
            <div className='signup-container'>
                <h2>회원가입 하기</h2>
                <div className="logo-container">
                    <img src="/logo.png" alt="청춘과밭" />
                </div>
                <p>
                    이미 회원이신가요? <Link to="/login" className='login-link'>로그인하기</Link>
                </p>
                <form onSubmit={handleSignup} className='signup-form'>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='이메일'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password'
                            placeholder='비밀번호'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className='form-group'>
                        <input
                            type="password"
                            placeholder="비밀번호 확인"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div><br />
                    <button type="submit" className="signup-button">가입하기</button>
                </form><br />
            </div>
        </Container>
    );
}

export default Signup;