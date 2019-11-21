export const BOOK_REQUEST = (roomId, userId, startTime, endTime, date) => {
  return {
    type: "BOOK_REQUEST",
    payload: {
      roomId: roomId,
      userId: userId,
      startTime: startTime,
      endTime: endTime,
      date: date
    }
  };
};
