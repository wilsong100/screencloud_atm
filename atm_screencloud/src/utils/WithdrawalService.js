import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
function WithdrawalService(withdrawAmount) {
  const {
    balance,
    setBalance,
    tenPoundNotes,
    twentyPoundNotes,
    setTwentyPoundNotes,
    setTenPoundNotes,
    fivePoundNotes,
    setFivePoundNotes,
    machineTotal,
    setMachineTotal,
  } = useContext(UserContext);
  const [overdraw, setOverdraw] = useState(false);
  const [machineMaxed, setMachineMaxed] = useState(false);
  const [multipleOfFive, setMultipleOfFive] = useState(false);
  const [noFives, setNoFives] = useState(false);
  const [noTens, setNoTens] = useState(false);

  let numberOfTwenty = 0;
  let numberOfTen = 0;
  let numberOfFive = 0;
  let newBalance;
  let newMachineTotal;

  if (withdrawAmount % 5 !== 0) {
    setMultipleOfFive(true);
  }
  if (withdrawAmount > machineTotal) {
    setMachineMaxed(true);
  }
  if (withdrawAmount > balance + 100) {
    setOverdraw(true);
  } else {
    let withdraw = withdrawAmount;
    let totalWithdrawn = 0;
    //let newTwenty;
    /* Logic for determining the number of £20, £10 & £5 bank notes to issue to the ATM user
    It begins with £20 notes and checks 
    */
    while (
      totalWithdrawn < withdrawAmount

      //  &&
      // (twentyPoundNotes > 0 || tenPoundNotes > 0 || fivePoundNotes > 0)
    ) {
      console.log("WITHDRAW at start of WHILE " + withdraw);

      // else if (withdraw % 20 === 10 && tenPoundNotes === 0) {
      //   setNoTens(true);
      //   console.log("NO TENS");
      // } else {

      if (
        (twentyPoundNotes > 0 && withdraw === 20) ||
        (twentyPoundNotes > 1 && withdraw >= 20)
      ) {
        totalWithdrawn = totalWithdrawn + 20;
        console.log("TOTAL " + totalWithdrawn);
        withdraw = withdraw - 20;
        console.log("WITHDRAW " + withdraw);
        numberOfTwenty = numberOfTwenty + 1;
        //newTwenty = twentyPoundNotes - numberOfTwenty;
        // console.log("NoOfTWENTY " + numberOfTwenty);

        console.log("TWENTY LOGGED " + twentyPoundNotes);
      }

      if (
        (tenPoundNotes > 0 && withdraw === 10) ||
        (tenPoundNotes > 1 && withdraw >= 10)
      ) {
        totalWithdrawn = totalWithdrawn + 10;
        console.log("TOTAL " + totalWithdrawn);
        withdraw = withdraw - 10;
        console.log("WITHDRAW " + withdraw);
        numberOfTen = numberOfTen + 1;
        //newTwenty = twentyPoundNotes - numberOfTwenty;
        // console.log("NoOfTWENTY " + numberOfTwenty);

        console.log("TEN LOGGED " + tenPoundNotes);
      }
      // if (
      //   fivePoundNotes === 0 &&
      //   (withdraw % 20 === 5 || withdraw % 10 === 5)
      // ) {
      //   setNoFives(true);
      //   console.log("NO FIVES");
      // } else {
      if (fivePoundNotes > 0 && withdraw >= 5) {
        totalWithdrawn = totalWithdrawn + 5;
        console.log("TOTAL " + totalWithdrawn);
        withdraw = withdraw - 5;
        console.log("WITHDRAW " + withdraw);
        numberOfFive = numberOfFive + 1;
        //newTwenty = twentyPoundNotes - numberOfTwenty;
        // console.log("NoOfTWENTY " + numberOfTwenty);

        console.log("TEN LOGGED " + tenPoundNotes);
      }
    }
    //   setTwentyPoundNotes(twentyPoundNotes - numberOfTwenty);
    //   setTenPoundNotes(tenPoundNotes - numberOfTen);
    //   setFivePoundNotes(fivePoundNotes - numberOfFive);
    console.log("WITHDRAW AMOUNT " + withdrawAmount);
    newBalance = balance - withdrawAmount;
    console.log("NEW BALANCE " + newBalance);
    newMachineTotal = machineTotal - withdrawAmount;
    console.log("NEW MACHINE TOTAL " + newMachineTotal);
    if (newBalance >= -100) {
      setBalance(newBalance);
      setMachineTotal(newMachineTotal);
      console.log(machineTotal);
    } else {
      console.log("OVERDRAWN Y");
      setOverdraw(true);
    }
  }

  setTwentyPoundNotes(twentyPoundNotes - numberOfTwenty);
  setTenPoundNotes(tenPoundNotes - numberOfTen);
  setFivePoundNotes(fivePoundNotes - numberOfFive);
  return <div></div>;
}

export default WithdrawalService;
