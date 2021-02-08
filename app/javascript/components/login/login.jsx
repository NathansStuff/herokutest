import React from 'react';

import './login.scss'; 


const Login = (props) => {

    const {email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleLogout, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
    } = props;

    return(
        <section className='login'>
            <div className="loginContainer">
                <label type="text">Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
            </div>

        </section>
    )
}

export default Login;