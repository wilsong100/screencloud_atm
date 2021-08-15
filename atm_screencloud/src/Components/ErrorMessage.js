import React from "react";

const ErrorMessage = ({ errorType }) => {
  console.log("ERROR " + errorType);
  let message = "";
  switch (errorType) {
    case "over300":
      message = "You can only withdraw £300 at a time";
      break;
    case "overdraftLimit":
      message = "You will go over your overdraft limit";
      break;
    case "multiplesOf5":
      message = "This machine only dispenses £5, £10, £20 notes";
      break;
    case "machineMaxed":
      message = "There is not enough cash in the machine";
      break;
    case "noFives":
      message = "There are no £5 notes left";
      break;
    case "noTens":
      message = "There are no £10 notes left";
      break;
    case "noNegativeAmount":
      message = "Please enter a value more than 0";
      break;
    default:
      message = "Sorry there was an error";
  }
  return <span className="error_text">{message}</span>;
};
export default ErrorMessage;
