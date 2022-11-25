import { collection, onSnapshot, getDoc, doc } from "firebase/firestore";
import {React, useState} from "react";
import { Card, Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";

function GroupCard(props){

     function testdoc(){  console.log( getDoc(doc(db, "groups", 'E42qIMdiH9KGP4Iv0oDa'))  )}
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

           x
                
             <div className="row"> 
              
             <Button   ><Link  to = {{
                pathname: "group-details/" + doc.id,

             }}           val = {doc.id}>Details</Link></Button>         
                </div>
 
            </Card.Body>  
                      </Card>
                        </div>
                    
                        {/* <div className="col-lg-4">
                        <Card>
            
            <Card.Header><Card.Title>{ doc.data.group_name}</Card.Title></Card.Header>
            <Card.Img variant="top"  src={ doc.data.group_image} />
            
            <Card.Body>
            <Card.Text>    
                <Container>
                <Card.Subtitle>From subtitle</Card.Subtitle>
                { doc.data.group_des}
                </Container>
            </Card.Text>

             <div className="row"> 
             <Button>Explore</Button>
                     
                </div>
 
            </Card.Body>  
                      </Card>
                        </div>
                    

                        <div className="col-lg-4">
                        <Card>
            
            <Card.Header><Card.Title>{ doc.data.group_name}</Card.Title></Card.Header>
            <Card.Img variant="top"  src={ doc.data.group_image} />
            
            <Card.Body>
            <Card.Text>    
                <Container>
                <Card.Subtitle>From subtitle</Card.Subtitle>
                { doc.data.group_des}
                </Container>
            </Card.Text>

             <div className="row"> 
             <Button>Explore</Button>
                     
                </div>
 
            </Card.Body>  
                      </Card>
                        </div> */}
                    
                    </div>


                );
            })}
        
        </Container>
        </>
    );
}

export default GroupCard;