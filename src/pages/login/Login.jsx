import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useTranslation } from 'react-i18next';

function Login() {
    const [user, setUser] = useState({ email: "", password:""});
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleChange = (input) => {
        setUser({...user, [input.target.name]:input.target.value});
    }
    
    const login = () => {
        if (user.email === "@gmail.com" && user.password === "123") {
            let token = "token do backend";
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            navigate("/");
        }else {
            alert('usuário ou senha incorretos');
        }
    }

    return (
        <div className="login-container">
            <Card title="Login" className="login-card">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <InputText onChange={handleChange} name="email" type="email" className="text-input" />
                </div> 
                <div className="field" >
                    <label htmlFor="Senha">Senha</label>
                    <Password onChange={handleChange} name="password" type="text" className="password" inputStyle={{ width: '100%' }} feedback={false} toggleMask />
                </div>
                <Button onClick={login} label={t('login')} className="button" />
                <div className="password-recovery-link">
                    <Link to="/password-recovery">Esqueceu a senha?</Link>
                </div>
                <div className="register-link">
                    <span>Não tem uma conta? </span>
                    <Link to="/register">Criar conta</Link>
                </div>
            </Card>
        </div>
        );
    }

export default Login;
