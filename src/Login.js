import React, {useState} from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

import userEvent from '@testing-library/user-event';

function Login() {
    //allow programmatically change the URL
    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = (e) => {
        //Prevent the page from refreshing
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password) // after this you can use user.email to print email
            .then((auth)  => {
                history.push('/');
            })
            .catch(error => alert(error.message));
        //firebase login here
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            //if authenication is good
            .then((auth) => {
                //if successfully created a new user with email and password
                console.log(auth);
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));

        //firebase register here
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className="login__logo"
                    src="https://www.marketplace.org/wp-content/uploads/2019/07/Amazondotcom.png"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e =>setPassword(e.target.value)}></input>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign-In</button>

                </form>

                <p>By siging-in, you agree to be my bitch</p>
                <button onClick={register}className="login__registerButton"> Create account</button>
            </div>
        </div>
    )
}

export default Login
