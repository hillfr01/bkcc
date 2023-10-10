import React from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {
	const loginAttempts = props.loginAttempts;
	alert(JSON.stringify(props));

	return (
		<div className="Attempt-List-Main">
			<p>Recent activity</p>
			<input type="input" placeholder="Filter..." />
			<ul className="Attempt-List">
				<LoginAttempt>Attempt no. {loginAttempts}.</LoginAttempt>
			</ul>
		</div>
	);
}

export default LoginAttemptList;