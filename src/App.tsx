import React, { FC, useContext } from "react";
import GuestPage from "./pages/guest";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard";
import UserPage from "./pages/userPage";

const App: FC = () => {
  const { authState, logout } = useContext(AuthContext);
  const isAuth = authState.status === "in";

  if (!isAuth) {
    return <GuestPage />;
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Dashboard logout={logout} />
      </Route>
      <Route exact path='/my_page'>
        <UserPage />
      </Route>
    </Switch>
  );
};

export default App;
