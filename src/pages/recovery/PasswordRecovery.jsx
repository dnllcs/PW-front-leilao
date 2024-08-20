import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import './PasswordRecovery.css';

function PasswordRecovery() {
	const navigate = useNavigate();
	const routeChange = () => {
		navigate("/password-change");
	}


	return (
		<div className="password-recovery-container">
			<Card title="Recuperação de senha" className="password-recovery-card">
				<form className="password-recovery-form">
					<div className="field">
					<label htmlFor="email">Email</label>
						<InputText id="email" type="email" className="text-input" />
					</div>
					<Button onClick={routeChange} label="Recuperar Senha" className="button" />
				</form>
				<div className="login-link">
					<Link to="/login">Retornar para tela de login</Link>
				</div>
			</Card>
		</div>
		);
	}

export default PasswordRecovery;
