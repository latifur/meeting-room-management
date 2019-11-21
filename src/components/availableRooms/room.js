import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Badge } from "react-bootstrap";

function Room(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} alt="Altu-Faltu" />

      {!props.availability && <Badge variant="info">Available Now</Badge>}
      <Card.Body>
        <Card.Title className="text-uppercase">
          <Link to={`/details/${props.itemSlug}`}>{props.itemSlug}</Link>
        </Card.Title>
        <div className="row">
          <Col xs={12}>
            <p>Capacity: {props.capacity}</p>
          </Col>
          <Col xs={12}>
            <p>Branch: {props.branch}</p>
          </Col>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Room;
