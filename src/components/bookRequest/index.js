import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BOOK_REQUEST } from "../../redux/action/userActions";

function BookRequest(props) {
  const [bookTime, setBookTime] = useState({
    date: "",
    starts: "",
    ends: "",
    isUpdated: false
  });
  const CurrentUserId = useSelector(state => state.user.currentUserId);
  const dispatch = useDispatch();
  function bookRequest(e) {
    e.preventDefault();
    dispatch(
      BOOK_REQUEST(
        props.roomId,
        CurrentUserId,
        bookTime.starts,
        bookTime.ends,
        bookTime.date
      )
    );
    setBookTime({
      date: bookTime.date,
      starts: bookTime.starts,
      ends: bookTime.ends,
      isUpdated: true
    });
  }
  return bookTime.isUpdated ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={e => bookRequest(e)}>
      <Row className="justify-content-between align-items-end">
        <Col md={4} lg={4}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="date"
              onChange={e =>
                setBookTime({
                  date: e.target.value,
                  starts: bookTime.starts,
                  ends: bookTime.ends,
                  isUpdated: bookTime.isUpdated
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={4} lg={3}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              placeholder="Hour"
              onChange={e =>
                setBookTime({
                  date: bookTime.date,
                  starts: e.target.value,
                  ends: bookTime.ends,
                  isUpdated: bookTime.isUpdated
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={4} lg={3}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              placeholder="Hour"
              onChange={e =>
                setBookTime({
                  date: bookTime.date,
                  starts: bookTime.starts,
                  ends: e.target.value,
                  isUpdated: bookTime.isUpdated
                })
              }
            />
          </Form.Group>
        </Col>

        <Col lg={2}>
          <Form.Group>
            <button className="btn btn-success btn-block">Book</button>
          </Form.Group>
        </Col>
      </Row>
    </form>
  );
}

export default BookRequest;
