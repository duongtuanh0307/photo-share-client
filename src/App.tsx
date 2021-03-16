import React, { FC } from "react";
import GuestPage from "./pages/guest";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import UserPage from "./pages/userPage";

const App: FC = () => {
  const initialAuthState = !localStorage.getItem("isAuth")
    ? false
    : localStorage.getItem("isAuth") === "0"
    ? false
    : true;
  const [isAuth, setAuth] = React.useState(initialAuthState);

  const login = () => {
    setAuth(true);
    localStorage.clear();
    localStorage.setItem("isAuth", "1");
  };
  const logout = () => {
    setAuth(false);
    localStorage.clear();
    localStorage.setItem("isAuth", "0");
  };

  if (!isAuth) {
    return <GuestPage login={login} />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard logout={logout} />
      </Route>
      <Route exact path="/my_page">
        <UserPage />
      </Route>
    </Switch>
  );
};

export default App;
