import React from 'react'
import '../LoginPage/Login.css';
import { useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { Card } from '@mui/material';
import { useNavigate } from "react-router-dom";



const Registration = () => {
    const fullnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredFullName = fullnameInput.current.value;
        const enteredUserName = usernameInput.current.value;
        const enteredPassword = passwordInput.current.value;

        const data = {
            fullname: enteredFullName,
            username: enteredUserName,
            password: enteredPassword,
        };
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/login`; 
        navigate(path);
      }

  return (
    <div>
        <Card style={{backgroundColor: "lightgrey"}} className='card'>
        <form className="form" onSubmit={submitHandler}>
            <div className='header2'>
                <p>Register</p>
            </div>
                <div className="control">
                    <label className='label'>FullName</label>
                    <br></br> 
                    <TextField className='textfield' label="FullName" variant="outlined"></TextField>
                </div>
                <div className="control">
                    <label className='label'>UserName</label>
                    <br></br> 
                    <TextField className='textfield' label="UserName" variant="outlined"></TextField>
                </div>
                <div className="control">
                    <label className='label'>Password</label> 
                    <br></br>
                    <TextField className='textfield' label="Password" variant="outlined"></TextField>
                </div>       
                <div className="actions">
                    <Button variant="contained" onClick={routeChange}>Registration</Button>
                </div> 
        </form>
        </Card>
      </div>
  )
}

export default Registration