import React from "react";
import './LoginForm.css';

const LoginForm = (props) => {
	const handleSubmit = (event) =>{
		event.preventDefault();

		//can use plain old js to get form fields and the values
		//document.forms[0][""]  or something

		const u = "admin";
		const p = "P@ssw0rd";

		props.onSubmit({
			username: u,
			password: p
		});
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="login" />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;