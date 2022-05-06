import React from "react";
import "./errorMessage.scss";
// import { ErrorIcon } from "@mui/icons-material/Error";

const ErrorMessage = ({ msg }) => {
    return (
        <div className="error-message-wrapper">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p>{msg}</p>
        </div>
    );
};

export default ErrorMessage;
