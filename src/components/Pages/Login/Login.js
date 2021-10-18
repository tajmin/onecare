import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();



    return (
        <div>
            <button onClick={signInUsingGoogle} className="px-8 bg-black text-white py-2">Google Sign In</button>
        </div>
    );
};

export default Login;