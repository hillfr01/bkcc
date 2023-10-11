import React from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => (
	<div className="Attempt-List-Main">
	 	<p>Recent activity</p>
	  	<input type="input" placeholder="Filter..." />
		<ul className="Attempt-List">
			{props.attempts.map(item => <LoginAttempt>{item.login} with pwd {item.pwd}</LoginAttempt>)}
		</ul>
	</div>
);

export default LoginAttemptList;