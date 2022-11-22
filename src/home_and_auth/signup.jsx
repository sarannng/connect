import { addDoc, collection, doc, documentId, Firestore, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Card, Form, Button, Container, DropdownButton, Dropdown, ButtonGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
function Signup(){
   
    const [name, setName] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [intro, setIntro] = useState(' ');
    const [userdocid, setuserdocid] = useState('sdfsdf ');
    function setNameHandler(event){
        setName(event.target.value);   
        console.log(name)
    }

    useEffect(  ()=>{
       getdocid();
    },[])

    function setPasswordHandler(event){
        setPassword(event.target.value);
    }

    function setEmailHandler(event){
        setEmail(event.target.value);
    }

    function setIntroHandler(event){
        setIntro(event.target.value);
    }
   
    async function getdocid(){
        const did =   (await addDoc(collection(db, "user"), {})).id;
        setuserdocid(did);
        console.log(did);
        return;
        
    }

   async function createuserIfnotExist(){
        const obj = {
            "name": name,
            "password": password,
            "email": email,
            "intro": intro
        }

        await setDoc(doc(db, "user", userdocid), obj);

    }
   
    return(
        <>

        <div className="row center">
           <div className=" text-center mb-3">
             <h2>Sign up</h2>
           </div>
         <div className="col-lg-12">
         <div >
        <Container >
        <div className="row">
        <Card style={{ width: '50rem' }}>
         <Card.Body>
         <Form>
       <Form.Group className="mb-3"  >
         <Form.Label>Email address</Form.Label>
         <Form.Control value={email} onChange={setEmailHandler} type="email" placeholder="Enter email" />
          
       </Form.Group>
 
       <Form.Group className="mb-3"  >
         <Form.Label>Password</Form.Label>
         <Form.Control value={password} onChange={setPasswordHandler} type="password" placeholder="Password" />
       </Form.Group>

       <Form.Group className="mb-3"  >
         <Form.Label>Name</Form.Label>
         <Form.Control value={name} onChange={setNameHandler} type="text" placeholder="Enter name" />
          
       </Form.Group>

       <Form.Group className="mb-3"  >
         <Form.Label>One line about you</Form.Label>
         <Form.Control value={intro} onChange={setIntroHandler} type="text" placeholder="Enter here" />
          
       </Form.Group>


       {/* <DropdownButton
            as={ButtonGroup}
            key="primary"
            id={`dropdown-variants-primary`}
            variant="primary"
            title="Gender"
          >
            <Dropdown.Item eventKey="1">Male</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Female</Dropdown.Item>
            
            
             
          </DropdownButton> */}
        
       <div className="text-center">
       <Button onClick={createuserIfnotExist} variant="primary"  >
         <Link to = {{
                pathname: "/" + userdocid,

             }} >
                Details Submit</Link>
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
    )
}

export default Signup;