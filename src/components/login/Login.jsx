import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, isLogin] = useState(false);
    const navigate = useNavigate();
    console.log(email);
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/login',{
            email: email,
            password: password
        }).then(result=> 
            {
                console.log(result);
                localStorage.setItem('token', result.data.token);
                isLogin(true);
                

            }
            
        );
        setEmail('');
        setPassword('');
        navigate('/users');

    }
  return (
    <div className='d-flex flex-row justify-content-center align-items-center mt-4'>
        
        <Form onSubmit={handleSubmit} style={{width:"50%"}}>
        <h2 className='text-center mt-4 mb-4'>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <div className='d-flex justify-content-between'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <span>New User? 
        <Link to='/register'>Click here to Register!</Link>
      </span>
      </div>
      

    </Form>
    </div>
  )
}

export default Login