import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap"; 

function Login()
{
    return (
        
         <>
       <Card>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
       
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Card.Body>
       </Card>

        </>
    
        
    );
}


export default Login;