import React, { useEffect, useState } from 'react';
import './Registration.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';




const Registration = () => {
    const [error, setError] = useState('');

    //react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        //to empty "error" state
        setError('');
        // console.log(data)
        const email = data.email;
        const password = data.password;
        const userName = data.name;

        // const pattern = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
        //password validation
        const pattern = "(?=.*?[0-9])";
        if(!password?.match(pattern)){
            alert("Password must be contain at least 1 number!")
            return false;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const myUser = result.user;
                updateProfile(auth.currentUser, {
                    displayName: userName,
                })
                window.location.reload();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    };


    ////this is for collecting data for custom Form!
    /* const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        const userEmail = e.target.value;
        setEmail(userEmail)
        // console.log(userEmail)
    }
    const handlePassword = e => {
        const userPassword = e.target.value;
        // console.log(userPassword)
        setPassword(userPassword)
    };

    const handleEmailPassLogin = (e) => {
        e.preventDefault();

        // console.log("E, P", email, password)

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    };
 */


    //to navigate login page
    const navigate = useNavigate()
    const handleNavigateToLogin = () => navigate('/login');


    return (
        <div className='container'>
            <h4 className='register-request-text'>Please Register:</h4>

            {/* //Error  */}
            <h6 className='register-error'> {error} </h6>

            {/* react hook form  */}
            <h6 className='new-user'>New User</h6>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <input {...register("name", { required: true })} placeholder='Enter Your Name' className='registration-input' />
                {errors.name && <span className="register-required">*Name is required!</span> }
                <input {...register("email", { required: true })} placeholder='Enter Your Email' className='registration-input' />
                {errors.email && <span className="register-required">*Email is required!</span> }

                <input {...register("password", { required: true })} placeholder='Your Password' className='registration-input' />
                {errors.password && <span className="register-required">*Password is required!</span> }
   
                <button className="btn btn-primary registration-submit">Submit</button>
            </form>

            <p className='regi-already-have-acc mt-5'>Already have an account? <button onClick={handleNavigateToLogin} className='btn btn-warning'>Sign in</button> </p>


            {/* //custom form  */}
            {/*  <form action="" onSubmit={handleEmailPassLogin}>

                <input onBlur={handleEmail} type="text" placeholder='email' />
                <input onBlur={handlePassword} type="text" placeholder='password' />

                <button>Submit</button>
            </form> */}

        </div>
    );
};

export default Registration;