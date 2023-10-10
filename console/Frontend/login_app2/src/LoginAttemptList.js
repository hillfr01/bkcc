import React from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {
	const loginAttempts = props.loginAttempts;
	const loginUsername = props.loginUsername;
	const loginPassword = props.loginPassword;

	return (
		<div className="Attempt-List-Main">
			<p>Recent activity</p>
			<input type="input" placeholder="Filter..." />
			<ul className="Attempt-List">
				<LoginAttempt>Attempt no. {loginAttempts} with user {loginUsername} and pwd {loginPassword}.</LoginAttempt>
			</ul>
		</div>
	);
}

export default LoginAttemptList;