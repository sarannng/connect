import { getDefaultNormalizer } from "@testing-library/react";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { db } from "../firebase-config";
import Header from "../reusable_comp/header";
import MembersCard from "../reusable_comp/members_card";
import RecentEventSideCard from "../reusable_comp/recent_event_sidecard";

function GroupDetails(props) {
   const [groupdid, setgroupdid] = useState('');
   const [groupDetaildata, setGroupDetaildata   ] = useState([]);
    

    useEffect(()=>{
        console.log(window.location.pathname);
        const id = window.location.pathname.split("/").pop();
        console.log(id);
        setgroupdid(id);

        getData(id);
    })


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

                <p> What we're about

This group is for mobile app developers who work with Google Flutter, who want to learn or are simply curious about it.</p>
            

                <div class = 'row'> 
                    <MembersCard/>
                </div>

            </div>

          
            <div className = "col-lg-4">
               <Container>
               <div>    jh {props.val}</div>
               <RecentEventSideCard/>
               </Container>
            </div>  
         </div>
         </Container>
        </>
    );
}

export default GroupDetails;