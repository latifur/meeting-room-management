import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Room from "./room";

function AllRooms() {
  const Rooms = useSelector(state => state.room);
  const ShowRooms = Rooms.AllRoomInfo.map((item, index) => {
    return (
      <Col className="mb-3" md={4} key={index}>
        <Room
          img={item.image[0].url}
          title={item.name}
          itemSlug={item.slug}
          sortDescription={item.description}
          availability={item.booked}
          capacity={item.capacity}
          branch={item.office}
        />
      </Col>
    );
  });
  return <Row>{ShowRooms}</Row>;
}

export default AllRooms;
