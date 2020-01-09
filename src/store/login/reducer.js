const initialState = {
  jwt: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "auth/LOGGED_IN": {
      return action.payload;
    }
    case "auth/LOG_OUT": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
