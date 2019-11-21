import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyBookings() {
  const data = useSelector(state => state);
  const room = data.room;
  const user = data.user;
  const bookedRooms = user.bookedByUser.map((item, index) => {
    console.log("item id is: ", item.roomId);
    const filteredRoom = room.AllRoomInfo.find(res => res.id == item.roomId);
    console.log("per spin", filteredRoom);
    return (
      <div key={index}>
        <h6>{item.date}</h6>
        <h6>
          Meeting time: {item.startTime} - {item.endTime}
        </h6>
        <p>
          <Link to={`/details/${filteredRoom.slug}`}>{filteredRoom.name}</Link>
        </p>
        <hr />
      </div>
    );
  });
  return (
    <div className="shadow-1 p-3">
      <h5>My Meeting Schedule</h5>
      <hr />
      {bookedRooms}
    </div>
  );
}

export default MyBookings;
