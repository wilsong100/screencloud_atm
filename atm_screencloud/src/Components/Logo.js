import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
function Logo() {
  return (
    <div className="titleContainer">
      <span className="account_ilogo">
        <FontAwesomeIcon icon={faCloud} />
      </span>
      <span className="account_ilogo">Cloud</span>
      <span className="account_logo"> Bank</span>
    </div>
  );
}

export default Logo;
