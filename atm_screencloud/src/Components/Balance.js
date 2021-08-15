import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
function Balance() {
  const { balance } = useContext(UserContext);

  return (
    <div className="balance_container">
      <label name="balance" className="balance_label">
        Balance: £{balance.toFixed(2)}
      </label>
    </div>
  );
}

export default Balance;
