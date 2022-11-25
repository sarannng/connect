import { collection, onSnapshot, getDoc, doc } from "firebase/firestore";
import {React, useState} from "react";
import { Card, Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
function MyaccGroupCard(props){
     
    const [parm, setparm] =  useState("group-details/")

    function parms(docid){
        setparm(parm+docid);
    
    }
    return(


    <>
    <Container>
        {props.groupdata.map((doc, index) =>{
            return(
                <div className="row">
                    <div className="col-lg-12">
                    <Card>
        
        <Card.Header><Card.Title>{ doc.id}</Card.Title></Card.Header>
        <Card.Img variant="top"  src={ doc.data.group_image} />
        
        <Card.Body>
        <Card.Text>    
            <Container>
            <Card.Subtitle>From subtitle</Card.Subtitle>
            { doc.data.group_des}
            </Container>
        </Card.Text>

     
            
         <div className="row"> 
          
         <Button   ><Link  to = {{
            pathname: "my-group-details/" + doc.id,

         }}>Edit Group Info</Link></Button>         
            </div>

        </Card.Body>  
                  </Card>
                    </div>
                
                    
                </div>


            );
        })}
    
    </Container>
    </>
);
}

export default MyaccGroupCard;