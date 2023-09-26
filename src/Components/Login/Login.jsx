import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null);
    console.log(user);
    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loginUser = result.user
                // console.log(loginUser);
                setUser(loginUser);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const hadnleSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            {
            user ?
             <button onClick={hadnleSignOut}>Log Out</button> :
             <button onClick={handleGoogleAuth}>Login</button>
            
        }
            {user && <div>
                <h2>User : {user.displayName}</h2>
                <p>Email : {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;