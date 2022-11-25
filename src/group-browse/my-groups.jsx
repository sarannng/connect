import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import GroupCard from "../reusable_comp/group_card";
import MyaccGroupCard from "../reusable_comp/myacc_group_card";

function MyGroups(){

    const [groupdataa, setgroupdata] = useState([]);
    useEffect(()=>{
        const userid = window.location.pathname.split("/")[1];
        
        onSnapshot(collection(db, "user", userid, "my_groups"), snapshot=>{
                setgroupdata(snapshot.docs.map((doc)=>({
                    id: doc.id,
                    data: doc.data
                })))
        });
        
    }, []);

    return(
        <>
        
        <h1>My Groups</h1> 

        <MyaccGroupCard groupdata = {groupdataa}/>   
        </>
    );  
}
 
export default MyGroups;