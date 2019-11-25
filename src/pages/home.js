import React from "react";
import AvailableRooms from "../components/availableRooms";
import MyBookings from "../components/myBookings";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md="9" className="order-2 order-md-1">
            <AvailableRooms />
          </Col>
          <Col md="3" className="order-1 order-md-2">
            <MyBookings />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
