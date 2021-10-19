import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signInUsingGoogle, signUpUsingEmail, loading } = useAuth();
    const history = useHistory();
    const redirectUrl = '/home';

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

    const handleConfirmPasswordInput = event => {
        setConfirmPassword(event.target.value)
    }

    const handleSignup = (event) => {
        console.log(email, password, confirmPassword);
        if (password === confirmPassword) {
            signUpUsingEmail(email, password)
                .then(result => {
                    history.push(redirectUrl);
                })
        }
        event.preventDefault();
    }

    if (loading) {
        return (
            <div class=" flex justify-center items-center min-h-screen">
                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-red-200 p-16">
                <form onSubmit={handleSignup}>
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
                </form>
            </div>
            <div>
                <button onClick={handleGoogleLogin} className="px-8 bg-black text-white py-2">Google Sign In</button>
            </div>
        </div>
    );
};

export default SignUp;