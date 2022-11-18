import React from "react";
import GroupCard from "../reusable_comp/group_card";
import Header from "../reusable_comp/header";
function Groups(){
    return(

        <>
        
        <Header/>
           <div className='row'>
              <div className = 'col-lg-4'>
                <GroupCard/>
              </div>

              <div className = 'col-lg-4'>
                <GroupCard/>
              </div>


              <div className = 'col-lg-4'>
                <GroupCard/>
              </div>              
            </div>
        </>
    );
}

export default Groups;