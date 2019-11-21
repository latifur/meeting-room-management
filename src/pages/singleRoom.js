import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SINGLE_ROOM } from "../redux/action/roomActions";
import { Container, Row, Col, Table, Alert } from "react-bootstrap";
import BookRequest from "../components/bookRequest";
import RoomBookList from "../components/bookingList";

function SingleRoom(props) {
  const thisSlug = props.match.params.slug;
  console.log(thisSlug);
  const dispatch = useDispatch();
  dispatch(SINGLE_ROOM(thisSlug));
  const SingleRooms = useSelector(state => state.room.singleRoom);
  const CurrentRoom = SingleRooms;

  return (
    <>
      <Container className="my-3">
        <Row>
          <Col md={8}>
            <div className="p-1 shadow-1">
              <img
                className="img-fluid"
                src={CurrentRoom.image[0].url}
                alt="Altu-Faltu"
              />
            </div>
            <div className="d-md-flex justify-content-between my-4">
              <h4 className=" text-uppercase">{CurrentRoom.name}</h4>
              <Alert variant={CurrentRoom.booked ? "warning" : "success"}>
                <b>Current Availability: </b>
                {CurrentRoom.booked ? "Booked" : "Available"}
              </Alert>
            </div>
            <p>{CurrentRoom.description}</p>
            <Table striped bordered hover>
              <colgroup>
                <col width="30%" />
                <col width="70%" />
              </colgroup>
              <thead>
                <tr>
                  <th colSpan="2" className="text-center">
                    Details Information
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capacity</td>
                  <td>{CurrentRoom.capacity} Person</td>
                </tr>
                <tr>
                  <td>Projector</td>
                  <td>{CurrentRoom.projector ? "yes" : "No"}</td>
                </tr>
                <tr>
                  <td>Monitor</td>
                  <td>{CurrentRoom.monitor ? "yes" : "No"}</td>
                </tr>
                <tr>
                  <td>Best use for</td>
                  <td>{CurrentRoom.type}</td>
                </tr>
                <tr>
                  <td>Office</td>
                  <td>{CurrentRoom.office}</td>
                </tr>
                <tr>
                  <td>floor</td>
                  <td>{CurrentRoom.floor}</td>
                </tr>
                <tr>
                  <td>Located</td>
                  <td>{CurrentRoom.location}</td>
                </tr>
              </tbody>
            </Table>
            <BookRequest roomId={CurrentRoom.id} />
          </Col>
          <Col>
            <RoomBookList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleRoom;
