import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Room(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>
          <Link to={`/singleRoom/${props.slug}`}>{props.title}</Link>
        </Card.Title>
        <Card.Text>{props.sortDescription}</Card.Text>
        <Button className="btn-block" variant="primary">
          Request For Booking
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Room;
