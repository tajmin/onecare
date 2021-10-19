import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle, signUpUsingEmail, errorMessage, updateUserInfo } = useAuth();
    const history = useHistory();
    const redirectUrl = '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirectUrl);
        })
    }

    const handleNameInput = event => {
        setName(event.target.value)
    }

    const handleEmailInput = event => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordInput = event => {
        setConfirmPassword(event.target.value)
    }

    const updateUserDetails = () => {
        updateUserInfo(name);
    }

    const handleSignup = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must contain at least 6 characters');
            return;
        }
        if (password === confirmPassword) {
            signUpUsingEmail(email, password)
                .then(result => {
                    history.push(redirectUrl);
                    updateUserDetails();
                })
            setError(errorMessage);
        } else {
            setError('Password and confirm password do not match')
        }
    }

    return (
        <div>
            <div className="bg-red-200 p-16">
                <form onSubmit={handleSignup}>
                    <div className="w-48">
                        <label className="block mb-2" htmlFor="name">Your Name</label>
                        <input onBlur={handleNameInput} className="w-full" type="text" name="name" required />
                    </div>
                    <div className="w-48">
                        <label className="block mb-2" htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailInput} className="w-full" type="text" name="email" required />
                    </div>
                    <div className="w-48 py-4">
                        <label className="block mb-2" htmlFor="password">Enter Password</label>
                        <input onBlur={handlePasswordInput} className="w-full" type="password" name="password" required />
                    </div>
                    <div className="w-48 py-4">
                        <label className="block mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordInput} className="w-full" type="password" name="confirmPassword" required />
                    </div>
                    <input className="px-4 py-1" type="submit" value="Submit" />
                    <div className="my-3"><p className="text-red-400">{error}</p></div>
                </form>
                <NavLink to="/login">Already Registered? Sign in</NavLink>
            </div>
            <div>
                <button onClick={handleGoogleLogin} className="px-8 bg-black text-white py-2">Google Sign In</button>
            </div>
        </div>
    );
};

export default SignUp;