import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function RoomBookList() {
  const [state, setState] = useState(useSelector(state => state));
  // const state = useSelector(state => state);
  const singleRoom = state.room.singleRoom;
  const bookingList = singleRoom.bookedByUser.map((item, index) => {
    const thisUser = state.user.users.find(res => res.id === item.userId);

    return (
      <div className="text-uppercase" key={index}>
        <h6>{item.date}</h6>
        <h6>
          Time: {item.startTime} - {item.endTime}
        </h6>
        <p>
          Booked By:{" "}
          <b>
            <i>{thisUser.name}</i>
          </b>
        </p>
        <hr />
      </div>
    );
  });
  return (
    <div className="shadow-1 p-3">
      <h5>From Book list</h5>
      <hr />
      {bookingList}
    </div>
  );
}

export default RoomBookList;
