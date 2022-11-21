import React, { useState } from 'react';
import './Login.css';
import useAuth from './../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const { user, googleLogin, signOutAuth } = useAuth();
    const [error, setError] = useState('');


    const navigate = useNavigate();
    const location = useLocation();  //to read if the login page is redirected from any specific page or not.
    const redirect_uri = location?.state?.from?.pathname || '/home';

    ////(firebase auth) sign in with Google // then redirects
    const handleSignInAndRedirect = () => {
        googleLogin()
            .then((result) => {
                // const myUser = result.user;
                navigate(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    };



    ////react-hook-form's Functions
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('');
        // console.log(data)
        const email = data.email;
        const password = data.password;

        //(firebase auth) Sign in a user with an email address and password.
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                navigate(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage)
                setError(errorMessage);
            });
    };

    //to navigate to register
    const handleRegisterNavigate = () => {
        navigate('/register')
    };


    if (redirect_uri !== '/home') {
        console.log("I am from", redirect_uri)
    }



    return (
        <div className='container'>
            <h4>Please login </h4>
            {user?.email || <h6 className='login-request-text'>If you want to visit to any <span className="login-top-protected">Protected</span> route/page!</h6>}


            {/* Google Login  */}
            <button onClick={handleSignInAndRedirect} className="btn btn-primary google-login m-4">Google login</button>


            {/* Email & Password Login //  react-hook-form  */}
            <h6>Or, use ID & Password:</h6>
            <form onSubmit={handleSubmit(onSubmit)} className='login-inputs-form'>
                <input {...register("email", { required: true })} className='login-input' placeholder='Your Email' />
                {errors.email && <span className='login-form-required'> *Email is required! </span>}

                <input {...register("password", { required: true })} className='login-input' placeholder='Your Password' />
                {errors.password && <span className='login-form-required'> *Password is required! </span>}

                {/* <input type="submit" /> */}
                <button className="btn btn-primary login-submit">Submit</button>
            </form>

            <h6>Don't have any account?</h6>
            <button onClick={handleRegisterNavigate} className="btn btn-warning login-create-btn mt-4">Create your Dental account &gt; </button>


            {/* //Error display  */}
            <h6>{error}</h6>

        </div>
    );
};

export default Login;