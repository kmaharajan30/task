import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');
    const navigate =useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(email1, password1);
        axios.post('https://reqres.in/api/register',{
            email: email1,
            password: password1
        }).then(result=> 
            {
                console.log(result);
                localStorage.setItem('token', result.data.token);
            }
        );
        setEmail1('');
        setPassword1('');
        navigate('/login');
        
    }
  return (
    <div className='d-flex flex-row justify-content-center align-items-center mt-4'>
        
        <Form onSubmit={handleSubmit} style={{width:"50%"}}>
        <h2 className='text-center mt-4 mb-4'>Register</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email1} onChange={(e)=>setEmail1(e.target.value)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder="Password" />
      </Form.Group>
      <div className='d-flex justify-content-between'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <span>Already an User? 
        <Link to='/'>Click here to Login!</Link>
      </span>
      </div>
      

    </Form>
    </div>
  )
}

export default Register