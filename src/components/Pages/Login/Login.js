import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle, signInUsingEmail, errorMessage } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirectUrl);
        })
    }

    const handleEmailInput = event => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInUsingEmail(email, password).then(result => {
            history.push(redirectUrl);
        })
        setError(errorMessage);
    }

    return (
        <div>
            <div className="bg-red-200 p-16">
                <form onSubmit={handleLogin}>
                    <div className="w-48">
                        <label className="block mb-2" htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailInput} className="w-full" type="text" name="email" required />
                    </div>
                    <div className="w-48 py-4">
                        <label className="block mb-2" htmlFor="password">Enter Password</label>
                        <input onBlur={handlePasswordInput} className="w-full" type="password" name="password" required />
                    </div>
                    <input className="px-4 py-1" type="submit" value="Submit" />
                    <div className="my-3"><p className="text-red-400">{error}</p></div>
                </form>
                <NavLink to="/signup">Already Registered? Sign Up</NavLink>
            </div>
            <div>
                <button onClick={handleGoogleLogin} className="px-8 bg-black text-white py-2">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;