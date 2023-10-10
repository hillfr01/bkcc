import React from "react";
import './LoginForm.css';

const LoginForm = (props) => {
	const loginAttempts = props.loginAttempts;
	const loginUsername = props.loginUsername;
	const loginPassword = props.loginPassword;

	const handleSubmit = (event) =>{
		event.preventDefault();

		props.onSubmit({
			login: loginUsername,
			password: loginPassword,
		});
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" value={loginUsername} />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" value={loginPassword} />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	);
}

export default LoginForm;