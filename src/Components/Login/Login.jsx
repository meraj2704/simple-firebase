import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null);
    console.log(user);
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user
                console.log(loginUser);
                setUser(loginUser);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const hadnleGoogleSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const handleGitHubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const gitLogInUser = result.user
            console.log(gitLogInUser);
            setUser(gitLogInUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {
            user ?
             <button onClick={hadnleGoogleSignOut}>Log Out</button> :
             <div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
                <button onClick={handleGitHubSignIn}>GitHub Sign In</button>
             </div>
            
        }
            {user && <div>
                <h2>User : {user.displayName}</h2>
                <p>Email : {user.email}</p>
                <img className='pic' src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;