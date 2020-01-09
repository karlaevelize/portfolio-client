import api from "../../api";

export function signUp(name, email, password) {
  return function thunk(dispatch, getState) {
    api("/user", {
      method: "POST",
      body: {
        name: name,
        email: email,
        password: password
      }
    })
      .then(data => console.log("data", data))
      .catch(err => console.log("err", err));
  };
}

export function successSignUp(data) {
  return {
    type: "sign_up/SUCCESS_SIGN_UP",
    payload: data
  };
}
