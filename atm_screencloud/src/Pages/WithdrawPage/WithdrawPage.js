/* 
Displays the Withdraw Page which allows the user to enter the amount they wish to withdraw
and clicks on enter. The logic to 
*/
import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";
import Balance from "../../Components/Balance";
import ErrorMessage from "../../Components/ErrorMessage";
import Logo from "../../Components/Logo";

function WithdrawPage() {
  /* Access the current state and setState from Context */
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
  const history = useHistory();
  /* Assign the input from the user*/
  const [withdrawAmount, setWithdrawAmount] = useState();
  /* Error indicator, if true then show error message */
  const [errorAlert, setErrorAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  /* Error type is assigned the reason for error which is then sent as a prop to the 
  ErrorMessage component which shows the error message on screen*/
  const [errorType, setErrorType] = useState("");
  /* variables to keep a record of the number of notes needed to make up the withdrawal amount */
  let numberOfTwenty = 0;
  let numberOfTen = 0;
  let numberOfFive = 0;

  /* Initial logic to check for errors before the withdrawal process takes place. 
  If there is an error, the errorAlert becomes true and the errorType is recorded. 
  When the error alert is true a message based on the error type will appear on 
  the screen to notify the user.
*/
  const intialChecks = () => {
    if (withdrawAmount > 300) {
      setErrorAlert(true);
      setErrorType("over300");
    } else if (withdrawAmount % 5 !== 0) {
      setErrorAlert(true);
      setErrorType("multiplesOf5");
    } else if (withdrawAmount > machineTotal) {
      setErrorAlert(true);
      setErrorType("machineMaxed");
    } else if (withdrawAmount > balance + 100) {
      setErrorAlert(true);
      setErrorType("overdraftLimit");
    } else if (withdrawAmount % 10 === 5 && fivePoundNotes === 0) {
      setErrorAlert(true);
      setErrorType("noFives");
    } else if (withdrawAmount % 20 === 10 && tenPoundNotes === 0) {
      setErrorAlert(true);
      setErrorType("noTens");
    } else if (withdrawAmount <= 0) {
      setErrorAlert(true);
      setErrorType("noNegativeAmount");
    } else if (
      twentyPoundNotes === 0 &&
      tenPoundNotes === 0 &&
      fivePoundNotes === 0
    ) {
      setErrorAlert(true);
      setErrorType("machineMaxed");
    } else {
      return true;
    }
  };
  /* handle the withdrawal when the user clicks on the Withdraw Cash button */
  const handleWithdraw = (e) => {
    console.log("HANDLE WITHDRAW: " + withdrawAmount);
    let newBalance;
    let newMachineTotal;
    if (intialChecks()) {
      let withdraw = withdrawAmount;
      let totalWithdrawn = 0;

      /* Logic for determining the number of £20, £10 & £5 bank notes to issue to the ATM user
        It loops through each of the denominations adding one of each until the total withdrawn equals
        the withdrawAmount
        */
      while (
        withdrawAmount > totalWithdrawn &&
        (twentyPoundNotes > 0 || tenPoundNotes > 0 || fivePoundNotes > 0)
      ) {
        console.log("WITHDRAW at start of WHILE " + withdraw);

        if (
          twentyPoundNotes !== 0 ||
          tenPoundNotes !== 0 ||
          fivePoundNotes !== 0
        ) {
          if (
            (twentyPoundNotes > 0 && withdraw === 20) ||
            (twentyPoundNotes > 1 && withdraw >= 20)
          ) {
            totalWithdrawn = totalWithdrawn + 20;
            console.log("TOTAL " + totalWithdrawn);
            withdraw = withdraw - 20;
            console.log("WITHDRAW " + withdraw);
            numberOfTwenty = numberOfTwenty + 1;
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

            console.log("TEN LOGGED " + tenPoundNotes);
          }

          if (fivePoundNotes > 0 && withdraw >= 5) {
            totalWithdrawn = totalWithdrawn + 5;
            console.log("TOTAL " + totalWithdrawn);
            withdraw = withdraw - 5;
            console.log("WITHDRAW " + withdraw);
            numberOfFive = numberOfFive + 1;

            console.log("TEN LOGGED " + tenPoundNotes);
          }
        }
      }

      if (
        twentyPoundNotes - numberOfTwenty >= 0 &&
        tenPoundNotes - numberOfTen >= 0 &&
        fivePoundNotes - numberOfFive >= 0
      ) {
        setTwentyPoundNotes(twentyPoundNotes - numberOfTwenty);
        setTenPoundNotes(tenPoundNotes - numberOfTen);
        setFivePoundNotes(fivePoundNotes - numberOfFive);
      } else {
        let remainderTwenty = numberOfTwenty - twentyPoundNotes;

        console.log(remainderTwenty);
        let remainderTen = numberOfTen - tenPoundNotes;
        console.log(remainderTen);
        let remainderFive = numberOfFive - fivePoundNotes;
        console.log(remainderFive);
        let totalRemainderAmount = 0;
        if (remainderTwenty > 0) {
          totalRemainderAmount = totalRemainderAmount + remainderTwenty * 20;
          setTwentyPoundNotes(0);
        }
        if (remainderTen > 0) {
          totalRemainderAmount = totalRemainderAmount + remainderTen * 10;
          setTenPoundNotes(0);
        }
        if (remainderFive > 0) {
          totalRemainderAmount = totalRemainderAmount + remainderFive * 5;
          setFivePoundNotes(0);
        }
        if (remainderTwenty < 0) {
          const remainder = totalRemainderAmount / 20;
          setTwentyPoundNotes(twentyPoundNotes - (numberOfTwenty + remainder));
        }
        if (remainderTen < 0) {
          const remainder = totalRemainderAmount / 10;
          setTenPoundNotes(tenPoundNotes - (numberOfTen + remainder));
        }
        if (remainderFive < 0) {
          const remainder = totalRemainderAmount / 5;
          setFivePoundNotes(fivePoundNotes - (numberOfFive + remainder));
        }
        console.log(totalRemainderAmount);
      }

      console.log("WITHDRAW AMOUNT " + withdrawAmount);
      newBalance = balance - withdrawAmount;
      console.log("NEW BALANCE " + newBalance);
      newMachineTotal = machineTotal - withdrawAmount;

      setBalance(newBalance);
      setMachineTotal(newMachineTotal);
      setSuccess(!success);
      setTimeout(function () {
        history.push("/accountpage");
      }, 1500);
    }
  };
  const handleBack = () => {
    history.push("/accountpage");
  };
  return (
    <>
      <div className="background">
        <section className="login">
          <div className="accountContainer">
            <Logo />
            <h1 className="accountUser">Welcome Michael</h1>

            <Balance />

            <div className="withdraw_box">
              <h2 className="withdraw_text">
                Please enter the amount you want to withdraw
              </h2>
              {success && "Please take your cash"}
              {errorAlert && <ErrorMessage errorType={errorType} />}
              <div className="withdraw_input_box">
                <label>£</label>
                <input
                  name="withdraw_amount"
                  className="withdraw_input"
                  required
                  type="number"
                  autoFocus
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>
              <div className="btnContainer">
                <button
                  name="withdraw_button"
                  text="submit"
                  onClick={handleWithdraw}
                  className="withdraw_button"
                >
                  Withdraw Cash
                </button>
              </div>
            </div>
            <button
              name="logout_button"
              text="submit"
              onClick={handleBack}
              className="logout_button"
            >
              Back to Account
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default WithdrawPage;
