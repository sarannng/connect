import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { db } from "../firebase-config";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

function CreateGroup(){
   const [groupname, setgroupname] = useState('');
   const [groupdes, setgroupdes] = useState('');
   const [groupimg, setgroupimg] = useState('');

  async function createGroup(){
     const groupdata = { 
      'group_name': groupname,
      'group_des': groupdes,
      'group_image': groupimg,
    }

    await addDoc(collection(db,'groups'), groupdata);
  }

  function changehandler_groupname(event){
    setgroupname(event.target.value);
    console.log(groupname);
  }

  function changehandler_groupdes(event){
    setgroupdes(event.target.value);
    console.log(groupdes);
  }

  function changehandler_groupimg(event){
    setgroupimg(event.target.value);
    console.log(groupimg);
  }
  return(
        <>
        <Container className="pt-3 ">
            
        <h2> Create Group</h2>

        <div className="row">
         <div className="col-lg-6">
       
        
         <FloatingLabel
        controlId="floatingInput"
        label="Group Name"
        className="mb-3"
        
      >
        <Form.Control value={groupname} onChange ={changehandler_groupname} type="email" placeholder="name@example.com" />
      </FloatingLabel>
       
        
       <FloatingLabel
        controlId="floatingInput"
        label="Group Description"
        className="mb-3"
      >
        <Form.Control value={groupdes} onChange ={changehandler_groupdes}  type="text" placeholder="name@example.com" />
      </FloatingLabel>


      <FloatingLabel
        controlId="floatingInput"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control value={groupimg} onChange ={changehandler_groupimg}  type="text" placeholder="name@example.com" />
      </FloatingLabel>
 

        <div className="mt-5 row">< Button onClick={createGroup} style={{ background: "green" }}>Submit for approval</Button></div>

         </div>

         <div className="col-lg-6 text-center">
            <h1>Some fancy image</h1>
         </div>
      
        </div>    
        </Container> 
        </>
    );
}

export default CreateGroup;