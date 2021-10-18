import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { user, signInUsingGoogle } = useAuth();


    return (
        <div>
            <button onClick={signInUsingGoogle} className="px-8 bg-black text-white py-2">Google Sign In</button>
        </div>
    );
};

export default Login;