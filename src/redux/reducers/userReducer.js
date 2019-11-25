import { allUser } from "../data/user/users";

const initialState = {
  users: allUser,
  currentUserId: 15,
  bookedByUser: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_REQUEST": {
      // console.log(action.payload);
      const BookingInfo = {
        roomId: action.payload.roomId,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
        date: action.payload.date
      };
      state.bookedByUser = [...state.bookedByUser, BookingInfo];
      state = state;
      return state;
    }
    default: {
      const currentUser = state.users.find(
        res => res.id === state.currentUserId
      );
      if (state.bookedByUser.length == 0) {
        state.bookedByUser = currentUser.bookedRoom;
      }
      return state;
    }
  }
};
