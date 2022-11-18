import React from "react";
import Header from "../reusable_comp/header";
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase-config"; 
import { async } from "@firebase/util";
import { deleteDoc, doc, collection, addDoc} from "firebase/firestore";



function Home(){

    async function test ()   {  
        await  addDoc(collection(db, "cities"), {
            name: "Tokyo",
            country: "Japan"
          });
    }
    return(
    <> 
        <Header/> 
        
        <Container>
            
         <div>
            <h2>
                Meet new people, at your conviniences        
            </h2>
        </div>    

            <div className="mt-4"></div>
        <div className="row ">
            
            <div className="col-lg-6">
            <Card>
                <Card.Body>
                    Join in the group
                </Card.Body>

                <Button><Link to ={'browse-groups'}>Explore</Link></Button>
            </Card>
            </div>
            
            <div className="col-lg-6">
            <Card>
                <Card.Body>
                    Create your own group
                </Card.Body>

                <Button onClick={test}><Link to ={'create-group'}>Create</Link></Button>
            </Card>
            </div>
        </div>
        </Container>
         
       </>
    );
}

export default Home;