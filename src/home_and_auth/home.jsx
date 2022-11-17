import React from "react";
import Header from "../reusable_comp/header";
import { Button, Card, Container, Image } from "react-bootstrap";

function Home(){
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

                <Button>Explore</Button>
            </Card>
            </div>
            
            <div className="col-lg-6">
            <Card>
                <Card.Body>
                    Create your own group
                </Card.Body>

                <Button>Create</Button>
            </Card>
            </div>
        </div>
        </Container>
         
       </>
    );
}

export default Home;