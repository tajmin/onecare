import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirectUrl);
        })
    }

    const handleLogin = () => { }

    return (
        <div>
            <div className="bg-red-200 p-16">
                <form onSubmit={handleLogin}>
                    <div className="w-48">
                        <label className="block mb-2" htmlFor="email">Your Email</label>
                        <input className="w-full" type="text" name="email" />
                    </div>
                    <div className="w-48 py-4">
                        <label className="block mb-2" htmlFor="password">Enter Password</label>
                        <input className="w-full" type="password" name="password" />
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

export default Login;