import axios from "../../api/axios";
export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};

export const requestAuthFetchMe = (newToken) => {
  if (!newToken) return;
  const token = `Bearer ${newToken}`;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
