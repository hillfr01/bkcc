import React from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => (
	<div className="Attempt-List-Main">
	 	<p>Recent activity</p>
	  	<input type="input" placeholder="Filter..." />
		<ul className="Attempt-List">
			<LoginAttempt>Username was {props.username} and password was {props.password}</LoginAttempt>
		</ul>
	</div>
);

export default LoginAttemptList;