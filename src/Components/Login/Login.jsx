import React from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup}  from 'firebase/auth'
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const handleGoogleAuth = () =>{
        signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleAuth}>Login</button>
        </div>
    );
};

export default Login;