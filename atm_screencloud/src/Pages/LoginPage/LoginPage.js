import React, { useState, useContext } from "react";
//import "./LoginPage.css";
import Axios from "axios";
import { UserContext } from "../../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

// import ErrorMessage from "../../Components/Messages/ErrorMessage";
function LoginPage() {
  const loginURL =
    "https://frontend-challenge.screencloud-michael.vercel.app/api/pin/";
  const [pin, setPin] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const { balance, setBalance } = useContext(UserContext);
  const [pinError, setPinError] = useState(false);
  const onSubmitLogin = async (e) => {
    setSubmitted(true);

    if (pin) {
      await Axios({
        method: "post",
        url: loginURL,
        data: {
          pin: pin,
        },
      }).then(
        (response) => {
          setBalance(response.data["currentBalance"]);
          setAuthenticated(true);
        },
        (error) => {
          setPinError(true);
        }
      );
    }
  };
  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      onSubmitLogin();
    }
  };

  return (
    <div className="background">
      <section className="login">
        <div className="loginContainer">
          <div className="titleContainer">
            <span className="ilogo">
              <FontAwesomeIcon icon={faCloud} />
            </span>
            <span className="ilogo">Cloud</span>
            <span className="logo"> Bank</span>
          </div>

          <h1 className="loginTitle">Login </h1>

          <label>Please enter your pin</label>
          <input
            className="login_input"
            type="password"
            required
            autoFocus
            value={pin}
            name="pin"
            onChange={(e) => setPin(e.target.value)}
            onKeyPress={handlePressEnter}
          />
          {submitted && !pin && (
            <span className="error_text">Please enter a Pin</span>
          )}
          {submitted && pinError && (
            <span className="error_text">
              "Incorrect Pin, Please try again!"
            </span>
          )}
          <div className="btnContainer">
            <button
              text="submit"
              onClick={onSubmitLogin}
              name="login_button"
              className="login_button"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
