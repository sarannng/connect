import React from "react";
import { Card, Container, Button} from "react-bootstrap";

function GroupCard(){
    return(
        <>
        <Container>
        <Card>
            
            <Card.Header><Card.Title>This is card Title</Card.Title></Card.Header>
            <Card.Img variant="top"  src="https://www.shutterstock.com/image-photo/brighton-england-august-03-2019-600w-1630338670.jpg" />
            
            <Card.Body>
            <Card.Text>    
                <Container>
                <Card.Subtitle>From subtitle</Card.Subtitle>
          
                 Director | Assistant Director | Actress. Priyanka Ghose is known for Karzzzz (2008), Chandrashekhar (2018) and Broken But Beautiful (2018).
                    Second Unit Director or Assistant Director: Aar...
                    Actress: Rush TV Journalist (2012)
                    Director: Broken But Beautiful (2021)
                </Container>
            </Card.Text>

             <div className="row"> 
             <Button>Explore</Button>
                     
                </div>
 
            </Card.Body>  
        </Card>
        </Container>
        </>
    );
}

export default GroupCard;