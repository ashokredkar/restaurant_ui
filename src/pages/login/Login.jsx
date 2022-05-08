import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="app_login app__bg flex__center section__padding">
      <div className="loginCard">
        <h2>Login</h2>
        <form action="">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="number" placeholder='Contact Number' />
          <input type="text" placeholder='Password' />
          <button className='custom__button'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login