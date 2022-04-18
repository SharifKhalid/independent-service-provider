import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Registration.css'
const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [ createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);


    const handleEmail = event =>{
        setEmail(event.target.value);
        
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    const handleError = event =>{
        setError(event.target.value);
    }

    const handleLogin = event =>{
        event.preventDefault();
        console.log(email,password);
        createUserWithEmailAndPassword(email,password);
        
    }



    return (
        <div className='form'>
            <form onSubmit={handleLogin}>
                <div className='email'>
                    <label for="Email">Email address</label>
                    <input onBlur={handleEmail} type="email" id="Email" required/>
                </div>
                
                <div className='password'>
                    <label for="Password">Password</label>
                    <input onBlur={handlePassword} type="password" id="Password" required/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Registration;