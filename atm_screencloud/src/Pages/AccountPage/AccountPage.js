import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";
//import Balance from "../../Components/Balance";
import MachineStats from "../../Components/MachineStats";
import Logo from "../../Components/Logo";
function AccountPage() {
  const {
    balance,
    authenticated,
    setAuthenticated,
    tenPoundNotes,
    twentyPoundNotes,
    setTwentyPoundNotes,
    setTenPoundNotes,
    fivePoundNotes,
    setFivePoundNotes,
    machineTotal,
  } = useContext(UserContext);

  const history = useHistory();
  const handleWithdrawButton = (e) => {
    if (authenticated) {
      history.push("/withdrawpage");
    }
  };
  const handleLogout = () => {
    setAuthenticated(false);
    history.push("/");
  };
  //Money formatter function
  //   function moneyFormatter(num) {
  //     let p = num.toFixed(2).split(".");
  //     return (
  //       "£ " +
  //       p[0]
  //         .split("")
  //         .reverse()
  //         .reduce(function (acc, num, i, orig) {
  //           return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
  //         }, "") +
  //       "." +
  //       p[1]
  //     );
  //   }

  setTwentyPoundNotes(twentyPoundNotes);
  setTenPoundNotes(tenPoundNotes);
  setFivePoundNotes(fivePoundNotes);

  return (
    <>
      <div className="background">
        <section className="login">
          <div className="accountContainer">
            <Logo />
            <h1 className="accountUser">Welcome Michael</h1>
            <div className="balance_container">
              <label name="balance" className="balance_label">
                Balance: £{balance.toFixed(2)}
              </label>
            </div>
            {/*  <Balance />*/}
            <div className="btnContainer">
              <button
                text="submit"
                onClick={handleWithdrawButton}
                name="withdraw_button"
                className="withdraw_button"
              >
                Withdraw Cash
              </button>
              <button text="submit" className="general_button" disabled>
                Change Pin
              </button>
              <button text="submit" className="general_button" disabled>
                Savings Account
              </button>
            </div>
            <button
              text="submit"
              className="logout_button"
              onClick={handleLogout}
            >
              Logout
            </button>
            <div className="withdraw_box"></div>
          </div>
          <MachineStats />
        </section>
      </div>
    </>
  );
}

export default AccountPage;
