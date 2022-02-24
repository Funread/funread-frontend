import React from 'react'
import '../LoginPage/Login.css';
import { useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { Card } from '@mui/material';
import { useNavigate } from "react-router-dom";



const Login = () => {
    const emailInput = useRef();
    const passwordInput = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInput.current.value;
        const enteredPassword = passwordInput.current.value;

        const data = {
            email: enteredEmail,
            password: enteredPassword,
        };
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/dashboard`; 
        navigate(path);
      }

  return (
    <div>
        <Card style={{backgroundColor: "lightgrey"}} className='card'>
        <form className="form" onSubmit={submitHandler}>
            <div className='header2'>
                <p>Log in</p>
            </div>
                <div className="control">
                    <label className='label'>Email</label>
                    <br></br> 
                    <TextField className='textfield' label="Email" variant="outlined"></TextField>
                </div>
                <div className="control">
                    <label className='label'>Password</label> 
                    <br></br>
                    <TextField className='textfield' label="Password" variant="outlined"></TextField>
                    <div>
                    <a className='linktext' href={""}>Create Account</a>
                    </div>  
                </div>       
                <div className="actions">
                    <Button variant="contained" onClick={routeChange}>Login</Button>
                </div> 
        </form>
        </Card>
      </div>
  )
}

export default Login