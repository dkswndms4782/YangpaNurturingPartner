import React, { useState } from 'react';
import '../css/loginCss.scss';

interface LoginForm {
    username: string;
    password: string;
}

const YangpaLogin: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({ username: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('로그인 시도:', form);
    };

    return (
        <div className="yangpa-login">
            <div className="login-image">
                <img src="/img/mainPaint.png" alt="양파 이미지"/>
                <p className="image-caption">"이번 생에 부모는 처음이니까"<br/>
                    저희가 함께 도와드리겠습니다.</p>
            </div>

            <div className="login-container">
                <div className="login-header">
                    <img src="/img/logo.png" alt="로고 이미지"/>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="아이디"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        required
                    />
                    <div className="auto-login">
                        <label>
                            <input type="checkbox"/>
                            <span>자동 로그인</span>
                        </label>
                    </div>
                    <button type="submit" className="login-button">로그인</button>
                    <button className="signup-button">회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default YangpaLogin;