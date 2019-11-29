import { AllMeetingRooms } from "../data/room";

const initialState = {
  AllRoomInfo: AllMeetingRooms,
  singleRoom: {},
  filteredRoom: AllMeetingRooms,
  count: 1
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_REQUEST": {
      console.log("payload is", action.payload);
      const tempRoom = state.AllRoomInfo.find(
        res => res.id == state.singleRoom.id
      );
      console.log("this room is: ", tempRoom.bookedByUser);
      const bookingInfo = {
        bookingId: 1,
        userId: action.payload.userId,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
        date: action.payload.date
      };
      state.singleRoom = tempRoom;
      tempRoom.bookedByUser = [...tempRoom.bookedByUser, bookingInfo];
      state.count = state.count + 1;
      console.log("hudai count ", state.count, state.singleRoom);
      const newState = state;
      return newState;
    }
    case "SINGLE_ROOM": {
      const ThisRoom = state.AllRoomInfo.find(
        res => res.slug === action.payload.slug
      );
      state.singleRoom = ThisRoom;
      return state;
    }
    case "SELECT_CAPACITY": {
      console.log("this is from reducer", action.payload.capacity);
      const filteredRooms = AllMeetingRooms.filter(
        res => res.capacity == action.payload.capacity
      );
      if (filteredRooms.length != 0) {
        const newState = {
          AllRoomInfo: state.AllRoomInfo,
          singleRoom: state.singleRoom,
          filteredRoom: filteredRooms,
          count: state.count
        };
        return newState;
      } else {
        const newState = {
          AllRoomInfo: state.AllRoomInfo,
          singleRoom: state.singleRoom,
          filteredRoom: state.AllRoomInfo,
          count: state.count
        };
        return newState;
      }
    }
    default: {
      return state;
    }
  }
};
