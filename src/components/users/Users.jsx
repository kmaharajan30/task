import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
const Users = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/login')
    
    
  }
  useEffect(() => {
    const fetchData = async()=>{
        const result = await axios.get("https://reqres.in/api/users?page=2");
        setData(result.data.data);
      console.log(data);
    }
    fetchData();  
  }, []);
  
  
    return (
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="d-flex justify-content-between">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Container>
          </Navbar>
          <h2 className="text-center">Users</h2>
          <div className="mt-4 d-flex flex-row justify-content-between align-items-center">
            {data.map((card, index) => {
              return (
                <Card key={index} style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={card.avatar} />
                  <Card.Body>
                    <Card.Title>{card.first_name} {card.last_name}</Card.Title>
                    
                    
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      );
  
};

export default Users;
