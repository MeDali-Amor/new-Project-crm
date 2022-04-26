import React, { useState } from "react";
import CustomCheckbox from "../../components/customCheckbox/CustomCheckbox";
// import "../login.css";
const LoginForm = ({ handleLogin, setUserRole }) => {
    // const [userRoleInput, setUserRoleInput] = useState("");
    return (
        <div className="loginForm">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
                <h3>Login Here</h3>
                <label className="login-label" htmlFor="username">
                    Username
                </label>
                <input type="text" placeholder="Email or Phone" id="username" />
                <label className="login-label" htmlFor="password">
                    Password
                </label>
                <input type="password" placeholder="Password" id="password" />
                <div className="login-row">
                    <div>
                        <CustomCheckbox />
                        <label>Se souvenir de moi</label>
                    </div>
                    <p>Mot de passe oublié</p>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;
