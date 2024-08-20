import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import './PasswordChange.css';

function PasswordChange() {

    const [user, setUser] = useState({ email: "", password: "" , newPassword:""});
    const [errorMessage, setErrorMessage] = useState((""));

    const handleChange = (input) => {
        setUser({ ...user, [input.target.name]: input.target.value });
        verifyPassword(input.target.value);
    }

    const verifyPassword = (password) => {
        var specialCharCheck = /[!@#$%^&*_+\-=|,.<>?~]/;
        var uppercaseCheck = /[A-Z]/;
        var lowercaseCheck = /[a-z]/;
        var numberCheck = /[0-9]/;
        if (!specialCharCheck.test(password)) {
            setErrorMessage("* Falta um caractere especial");
            return;
        }
        if (!uppercaseCheck.test(password)) {
            setErrorMessage("* A senha não possui letra maiúscula");
            return;
        }
        if (!lowercaseCheck.test(password)) {
            setErrorMessage("* A senha não possui letra minúscula");
            return;
        }
        if (!numberCheck.test(password)) {
            setErrorMessage("* A senha não possui número");
            return;
        }
        if (password.length < 6) {
            setErrorMessage("* Senha muito curta");
            return;
        }
        
        setErrorMessage("");
    }

    return (
        <div className="PasswordChange-container">
            <Card title="Alterar Senha" className="PasswordChange-card">
                <form className="PasswordChange-form">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <InputText type="email" className="text-input" />
                    </div>
                    <div className="field">
                        <label htmlFor="codigo">Código</label>
                        <InputText type="codigo" className="text-input" />
                    </div>
                    <div className="field">
                        <label htmlFor="Senha">Senha</label>
                        <Password onChange={handleChange} className="password" inputStyle={{ width: "100%" }} feedback={false} toggleMask />
                        <div>
                            {errorMessage === "" ? null :
                                <span style={{
                                    color: 'red',
                                }}>{errorMessage}</span>}
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="Senha">Confirmar Senha</label>
                        <Password className="password" inputStyle={{ width: "100%" }} feedback={false} toggleMask />
                    </div>
                    <Button label="confirmar nova senha" className="button" />
                </form>
                <div className="login-link">
                    <Link to="/login">Voltar para tela de login</Link>
                </div>
            </Card>
        </div>
    );
}

export default PasswordChange;
