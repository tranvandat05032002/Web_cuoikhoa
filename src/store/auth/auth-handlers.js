import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-requests";

export default function* handleAuthRegister(action) {
  console.log(action);
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log(response)
  } catch (error) {
    console.log(error.message);
  }
}
