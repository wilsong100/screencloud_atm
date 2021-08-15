import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import WithdrawPage from "./Pages/WithdrawPage/WithdrawPage";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { UserContext } from "./UserContext";

function App() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [balance, setBalance] = useState(0);
  const [fivePoundNotes, setFivePoundNotes] = useState(4);
  const [tenPoundNotes, setTenPoundNotes] = useState(15);
  const [twentyPoundNotes, setTwentyPoundNotes] = useState(7);
  const [machineTotal, setMachineTotal] = useState(310);
  const values = {
    authenticated,
    setAuthenticated,
    balance,
    setBalance,
    fivePoundNotes,
    setFivePoundNotes,
    tenPoundNotes,
    setTenPoundNotes,
    twentyPoundNotes,
    setTwentyPoundNotes,
    machineTotal,
    setMachineTotal,
  };
  return (
    <UserContext.Provider value={values}>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute exact path="/accountpage" component={AccountPage} />
          <PrivateRoute exact path="/withdrawpage" component={WithdrawPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
