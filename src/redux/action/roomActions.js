export const SINGLE_ROOM = slug => {
  return {
    type: "SINGLE_ROOM",
    payload: {
      slug: slug
    }
  };
};

export const SelectCapacity = capacity => {
  return {
    type: "SELECT_CAPACITY",
    payload: {
      capacity: capacity
    }
  };
};
