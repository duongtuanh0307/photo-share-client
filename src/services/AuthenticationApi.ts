import httpRequest from "./adapter";
import { getToken } from "../utility/cookies";

type AuthInfo = {
  id: string;
  email: string;
  username: string;
  profile_image: string;
  description: string;
  password: string;
  token?: string;
};

type Res = {
  status: any;
  data?: AuthInfo;
  error?: string;
};

const login = async (email: string, password: string) => {
  const res = await httpRequest<Res>({
    method: "POST",
    url: "/login",
    data: {
      email,
      password,
    },
  });
  return res;
};

const signup = async (email: string, username: string, password: string) => {
  const res = await httpRequest<Res>({
    method: "POST",
    url: "/signup",
    data: {
      email,
      username,
      password,
    },
  });
  return res;
};

const getUserInfo = async (username: string) => {
  const token = getToken();
  const res = await httpRequest<Res>({
    method: "GET",
    url: `/user/${username}`,
    headers: {
      token,
    },
  });
  return res;
};

export { login, signup, getUserInfo };
