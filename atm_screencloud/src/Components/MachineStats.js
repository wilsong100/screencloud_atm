import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function MachineStats() {
  const { tenPoundNotes, twentyPoundNotes, fivePoundNotes, machineTotal } =
    useContext(UserContext);

  return (
    <div className="machine_container">
      <div className="machine_notes">
        <h2 className="withdraw_text">£20 notes: {twentyPoundNotes}</h2>
        <h2 className="withdraw_text">£10 notes: {tenPoundNotes} </h2>
        <h2 className="withdraw_text">£5 notes: {fivePoundNotes} </h2>
      </div>
      <div className="machine_total">
        <h2 className="withdraw_text">Machine Total: {machineTotal}</h2>
      </div>
    </div>
  );
}

export default MachineStats;
