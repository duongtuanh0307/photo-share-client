import React, { createContext, useState, useEffect } from "react";
import { getUserInfo, login, signup } from "../services/AuthenticationApi";
import {
  setToken,
  setCurrentUser,
  deleteTokenCookie,
  getToken,
  getUsernameFromCookie,
  deleteUsernameCookie,
} from "../utility/cookies";

type AuthState = {
  status: string;
  user: any;
  token: string;
  err?: string;
};

type AuthContextType = {
  authState: AuthState;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signupWithEmailAndPassword: (
    email: string,
    username: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
  resetErr: () => void;
};

const defaultUser = {
  id: "",
  email: "",
  username: "",
  profile_image: "",
  description: "",
  password: "",
};

export const AuthContext = createContext<AuthContextType>(undefined!);

const AuthProvider = (props: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    status: "loading",
    user: defaultUser,
    err: undefined,
    token: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      const currentUser = getUsernameFromCookie();
      if (token === "" || currentUser === "") {
        setAuthState({
          status: "out",
          user: defaultUser,
          err: undefined,
          token: "",
        });
      } else {
        const data = await getUserInfo(currentUser);
        setAuthState({
          status: "in",
          user: data,
          token,
          err: undefined,
        });
      }
      return;
    };
    fetchData();
  }, []);

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const { data } = await login(email, password);
      if (data.status === "success") {
        setToken(data?.data?.token || "");
        setCurrentUser(data?.data?.username || "");
        setAuthState({
          ...authState,
          status: "in",
          user: data.data,
          token: data?.data?.token ?? "",
        });
      }
    } catch (error) {
      setAuthState({
        ...authState,
        err: error.data.error,
      });
    }
  };

  const signupWithEmailAndPassword = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      const { data } = await signup(email, password, username);
      if (data.status === "success") {
        setToken(data?.data?.token || "");
        setCurrentUser(data?.data?.username || "");
        setAuthState({
          ...authState,
          status: "in",
          user: data.data,
          token: data?.data?.token ?? "",
        });
      }
    } catch (error) {
      setAuthState({
        ...authState,
        err: error.data.error,
      });
    }
  };

  const logout = () => {
    deleteUsernameCookie();
    deleteTokenCookie();
    setAuthState({
      ...authState,
      status: "out",
      user: defaultUser,
    });
  };

  const resetErr = () => {
    setAuthState({
      ...authState,
      err: undefined,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginWithEmailAndPassword,
        signupWithEmailAndPassword,
        logout,
        resetErr,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
