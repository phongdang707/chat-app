import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  USER_NAME,
} from "../actions/counterActions";

const counterReducer = (state, action) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        name: action.state,
      };
    default:
      return { ...state };
  }
};

export default counterReducer;
