import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap"; 

function Login()
{
    return (
         <>

       <div className="row center">
          <div className=" text-center mb-3">
            <h2>Login here</h2>
          </div>
        <div className="col-lg-12">
        <div >
       <Container  >
       <div className="row">
       <Card style={{ width: '50rem' }}>
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
       
      <div className="text-center">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
        </Card.Body>
       </Card>
       </div>
       </Container>
       </div>
        </div>
       </div>
       

        </>        
    );
}


export default Login;