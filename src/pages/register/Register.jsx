import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    return (
        <div className="register-container">
            <Card title="Registrar uma nova conta" className="register-card">
                <form className="register-form">
                    <div className="field">
                        <label htmlFor="usuario">Usuário</label>
                        <InputText type="text" className="text-input" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <InputText type="email" className="text-input" />
                    </div>      
                    <label htmlFor="Senha">Senha</label>
                    <div className="field">
                        <Password className="password" inputStyle={{ width: '100%' }} feedback={false} toggleMask />
                    </div>
                    <Button label="Registrar" className="button" />
                </form>
                <div className="login-link">
                    <span>Já possui uma conta? </span>
                    <Link to="/login">faça login</Link>
                </div>
            </Card>
        </div>
    );
}

export default Register;
