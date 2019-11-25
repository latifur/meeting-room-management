import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BOOK_REQUEST } from "../../redux/action/userActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookRequest(props) {
  const [bookTime, setBookTime] = useState({
    date: "",
    starts: "",
    ends: "",
    isUpdated: false
  });
  const [startDate, setStartDate] = useState({
    date: new Date(),
    startTime: new Date(),
    endTime: new Date()
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
    setBookTime({ isUpdated: true });
  }
  function handleDate(today) {
    setStartDate({
      date: today,
      startTime: startDate.startTime,
      endTime: startDate.endTime
    });
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setBookTime({ date: date, starts: bookTime.starts, ends: bookTime.ends });
  }
  function handleStartTime(today) {
    setStartDate({
      date: startDate.date,
      startTime: today,
      endTime: startDate.endTime
    });
    const date = today.getHours() + ":" + today.getMinutes();
    setBookTime({
      date: bookTime.date,
      starts: date,
      ends: bookTime.ends
    });
  }
  function handleEndTime(today) {
    setStartDate({
      date: startDate.date,
      startTime: startDate.startTime,
      endTime: today
    });
    const date = today.getHours() + ":" + today.getMinutes();
    setBookTime({
      date: bookTime.date,
      starts: bookTime.starts,
      ends: date
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

            <DatePicker
              selected={startDate.date}
              dateFormat="yyyy/MM/dd"
              onChange={day => handleDate(day)}
              className="form-control"
            />
          </Form.Group>
        </Col>
        <Col md={4} lg={3}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Start Time</Form.Label>

            <DatePicker
              selected={startDate.startTime}
              onChange={date => handleStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="form-control"
            />
          </Form.Group>
        </Col>
        <Col md={4} lg={3}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>End Time</Form.Label>

            <DatePicker
              selected={startDate.endTime}
              onChange={date => handleEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="form-control"
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
