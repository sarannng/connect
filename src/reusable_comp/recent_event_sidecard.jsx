import React from "react";
import { Card, Container } from "react-bootstrap";
function RecentEventSideCard(){
    return( 
        <Container>
            
        <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
           </Card.Body>
      </Card>


        </Container>
        )
}

export default RecentEventSideCard;