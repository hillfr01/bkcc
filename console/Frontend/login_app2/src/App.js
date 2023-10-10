import React, { useState } from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {
    const [loginAttempts, setLoginAttempts] = useState(0);
    //const [loginUsername, setLoginUsername] = useState("");
    //const [loginPassword, setLoginPassword] = useState("");

    function updateAttempts(login, password) {
        setLoginAttempts(prevloginAttempts => prevloginAttempts + 1);
        alert(loginAttempts);
    }

  return (
    <div className="App">
      <LoginForm onSubmit={({ login, password }) => updateAttempts(login, password)} />
          <LoginAttemptList loginAttempts={loginAttempts} />
    </div>
  );
};

export default App;
