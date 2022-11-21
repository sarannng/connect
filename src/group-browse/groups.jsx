import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import GroupCard from "../reusable_comp/group_card";
import Header from "../reusable_comp/header";
function Groups(){

  const [groupData, setgroupData] = useState([]);

  useEffect(()=>{
    getGroupData();
  }) 

  function getGroupData(){ 
  
    onSnapshot(collection(db, 'groups'), snapshot =>{
      setgroupData(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }
    return(
        
        <>
        
        <Header/>
           <div className='row'>
              <div className = 'col-lg-12'>
                <GroupCard groupdata ={groupData} />
              </div>

              {/* <div className = 'col-lg-4'>
                <GroupCard  groupdata ={groupData}/>
              </div>


              <div className = 'col-lg-4'>
                <GroupCard  groupdata ={groupData}/>
              </div>               */}
            </div>
        </>
    );
}

export default Groups;