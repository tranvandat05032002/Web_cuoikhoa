import { takeLatest } from "redux-saga/effects";
import { authRegister, authSign } from "./auth-slice";
import handleAuthRegister, { handleAuthLogin } from "./auth-handlers";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authSign.type, handleAuthLogin);
}
