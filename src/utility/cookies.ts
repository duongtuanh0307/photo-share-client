import Cookies from "js-cookie";

const TOKEN = "token";
const USERNAME = "username";

const setToken = (token: string) => {
  Cookies.set(TOKEN, token, { path: "/", expires: 1 });
};

const setCurrentUser = (username: string) => {
  Cookies.set(USERNAME, username, { paths: "/", expires: 1 });
};

const deleteTokenCookie = () => {
  Cookies.remove(TOKEN, { path: "/" });
};

const getToken = () => {
  return Cookies.get(TOKEN) || "";
};

const getUsernameFromCookie = () => {
  return Cookies.get(USERNAME) || "";
};

const deleteUsernameCookie = () => {
  Cookies.remove(USERNAME, { path: "/" });
};

export {
  setToken,
  setCurrentUser,
  deleteTokenCookie,
  getToken,
  getUsernameFromCookie,
  deleteUsernameCookie,
};
