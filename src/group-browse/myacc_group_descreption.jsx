
import { getDefaultNormalizer } from "@testing-library/react";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { db } from "../firebase-config";
import Header from "../reusable_comp/header";
import MembersCard from "../reusable_comp/members_card";
import RecentEventSideCard from "../reusable_comp/recent_event_sidecard";
import { Form, FloatingLabel } from "react-bootstrap";
function MyaccGroupDetails(props){
 
    const [groupdid, setgroupdid] = useState('');
    const [groupDetaildata, setGroupDetaildata   ] = useState([]);
    const [group_name, setgroup_name] = useState("");
    const [group_des, setgroup_set] = useState("");
 
     useEffect(()=>{
         console.log(window.location.pathname);
         const id = window.location.pathname.split("/").pop();
         console.log(id);
         setgroupdid(id);
 
         getData(id);
     });

     function changehandler_groupname(){}
 
 
     async function getData(id){
         let data = await getDoc(doc(db, "groups", id));
         console.log("sdlfjlsdjf")
         console.log(data.data());
          
     }
    
     return(
         <>
         <Header/>
 
          <Container>
          <div className="row">
             <div className = "col-lg-8">
                 <h2>Group Name Here</h2>
        <FloatingLabel
        controlId="floatingInput"
        label="Group Name"
        className="mb-3"
        
      >
        <Form.Control value={group_name} onChange ={changehandler_groupname} type="email" placeholder="name@example.com" />
      </FloatingLabel>
                 <p> What we're about
 
 This group is for mobile app developers who work with Google Flutter, who want to learn or are simply curious about it.</p>
             
 
                 <div class = 'row'> 
                     <MembersCard/>
                 </div>
 
             </div>
 
           
             <div className = "col-lg-4">
                <Container>
                <div>{props.val}</div>
                <RecentEventSideCard/>
                </Container>
             </div>  
          </div>
          </Container>
         </>
     );}

export default MyaccGroupDetails;