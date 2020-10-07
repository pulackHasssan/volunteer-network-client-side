import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [user, setUser] = useState({
        isSignedIn : false,
        userName: '',
        email: '',
        photoUrl: ''
    });

    const [loggedInUser, setLoggedInuser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: '/'}};
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res=> {
            const {displayName, photoURL, email} = res.user;
            const signinUser={
                isSignedIn: true,
                userName: displayName,
                email: email,
                photoUrl: photoURL
            };
            setUser(signinUser);
            setLoggedInuser(signinUser);
            storeAuthToken();
            history.replace(from);
          })
          .catch(err => {
            const errorMessage = err.message;
            console.log(errorMessage);
          });
          
    }
     const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken)
          }).catch(function(error) {
          });
     }

    return (
        <div className="log-in-style"t>
           <Link to="/home"><img src="https://i.ibb.co/cYzjzr5/Group-1329.png" alt="Logo"/></Link>
           <div className="log-in-box">
           <h2>Log in with</h2>
           <br/>
           <button onClick={handleSignIn}>Continue with google</button>
           <br/>
           <p>Not have an account? create an account.</p>
           </div>

        </div>
    );
};

export default Login;