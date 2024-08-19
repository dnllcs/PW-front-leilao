import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <Card title="Login" className="login-card">
                <label htmlFor="usuario">Usuário</label>
                <div className="field">
                    <InputText type="text" className="text-input" />
                </div>
                <label htmlFor="Senha">Senha</label>
                <div className="field" >
                    <Password type="text" className="password" inputStyle={{ width: '100%' }} feedback={false} toggleMask />
                </div>
                    <Button label="Login" className="button" />
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
