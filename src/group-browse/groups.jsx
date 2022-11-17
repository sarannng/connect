import React from "react";
import GroupCard from "../reusable_comp/group_card";
function Groups(){
    return(
        <>
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