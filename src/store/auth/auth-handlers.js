import { call } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "../../utils/auth";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Register account successfully!");
    }
  } catch (error) {
    toast.error("Can't register account");
    console.log(error.message);
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log(response);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* handleFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

export { handleAuthLogin, handleFetchMe };
