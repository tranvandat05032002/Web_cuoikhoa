import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if(response.status === 201){
      toast.success("Register account successfully!")
    }
  } catch (error) {
    toast.error("Can't register account")
    console.log(error.message);
  }
}
