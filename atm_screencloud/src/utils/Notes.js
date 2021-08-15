import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function Notes() {
  const { balance, setbalance, withdrawAmount, setWithdrawAmount } =
    useContext(UserContext);

  let notes = [];
  console.log("balance " + withdrawAmount);
  return <div></div>;
}

export default Notes;
