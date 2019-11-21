export const SINGLE_ROOM = slug => {
  return {
    type: "SINGLE_ROOM",
    payload: {
      slug: slug
    }
  };
};
