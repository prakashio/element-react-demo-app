import C from "./constant";

export const notes = (state = [], action) => {
  switch (action.type) {
    case C.ADD_NOTE:
      return [...state, note({}, action)];
    default:
      return state;
  }
};

export const note = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_NOTE:
      return action.note;
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case C.IS_LOADING:
      return action.loading;
    default:
      return state;
  }
};
