import { takeLatest } from "redux-saga/effects";
import {
  authRefreshToken,
  authRegister,
  authLogin,
  authLogOut,
} from "./auth-slice";
import handleAuthRegister, {
  handleAuthLogOut,
  handleAuthLogin,
  handleAuthRefreshToken,
} from "./auth-handlers";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
  yield takeLatest(authLogOut.type, handleAuthLogOut);
}
