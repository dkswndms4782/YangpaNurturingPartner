import React, {useState} from 'react';
import '../css/loginCss.scss';

const LoginPage: React.FC = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // 로그인 로직 구현
        console.log('Login attempt with:', {id, password, rememberMe});
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="image-container">
                    <img src="/img/mainPaint.png" alt="Mother and child with onion character" className="login-image"/>
                    <p className="image-caption">"이번 생에 부모는 처음이니까"<br/>저희가 함께 도와드리겠습니다.</p>
                </div>
                <div className="form-container">
                    <img src="/img/logo.png" alt="YANGPA Logo" className="logo"/>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="아이디"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">자동 로그인</label>
                        </div>
                        <div className="findIDFW">
                            <a href="#">
                                <p>아이디 찾기 / 비밀번호 찾기</p>
                            </a>
                            <a href="#">
                                <img src="/img/googleLogo.png" alt="구글로고"/>
                            </a>
                        </div>
                        <div className="btnArea">
                            <button type="button" className="register-button">회원가입</button>
                            <button type="submit" className="login-button">로그인</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;