import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

function CreateGroup(){
    return(
        <>
        <Container className="pt-3 ">
            
        <h2> Create Group</h2>

        <div className="row">
         <div className="col-lg-6">
       
        
         <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
       
        
       <FloatingLabel
        controlId="floatingInput"
        label="Group Description"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>

        <Button>Click to upload banner</Button>


        <div className="mt-5 row">< Button style={{ background: "green" }}>Submit for approval</Button></div>

         </div>
         
        </div>    
        </Container> 
        </>
    );
}

export default CreateGroup;