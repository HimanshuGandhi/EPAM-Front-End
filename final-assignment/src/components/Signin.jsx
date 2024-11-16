import React, { useState } from 'react';
import './Signin.css';
import pht from './images/login1.png';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignIn(username, password);
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={pht} alt="profile" className="profile"/>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <input type="text" placeholder="Username" className="name" value={username} onChange={(event) => setUsername(event.target.value)} onKeyPress={handleKeyPress}/>
            </div>
            <div>
              <input type="password" placeholder="Password" className="name" value={password} onChange={(event) => setPassword(event.target.value)} onKeyPress={handleKeyPress}/>
            </div>
            <button className='log' onClick={handleSubmit}>Login</button>
          </div>
          <br />
          <p5>Username: Himanshu & Password: 12345</p5>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
