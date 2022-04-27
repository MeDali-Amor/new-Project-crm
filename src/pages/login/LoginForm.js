import React, { useState } from "react";
import CustomCheckbox from "../../components/customCheckbox/CustomCheckbox";
import "./login.scss";
const LoginForm = ({ handleLogin }) => {
    return (
        <div className="login-form-container">
            {/* <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div> */}
            <form className="login-form" onSubmit={handleLogin}>
                <h3 className="login-title">Bienvenue</h3>
                <label className="login-label" htmlFor="username">
                    Username
                </label>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Email or Phone"
                    id="username"
                />
                <label className="login-label" htmlFor="password">
                    Password
                </label>
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    id="password"
                />
                <div className="login-row">
                    <div>
                        <CustomCheckbox />
                        <label className="login-check-label">
                            Se souvenir de moi
                        </label>
                    </div>
                    <p className="login-secondary-link">Mot de passe oublié</p>
                </div>
                <button className="login-button" type="submit">
                    Log In
                </button>
            </form>
            <div className="login-secondary-text-container">
                <span className="login-secondary-text">
                    Vous n'avez pas un compte?
                </span>
                <span className="login-secondary-link">s'inscrire ici</span>
            </div>
        </div>
    );
};

export default LoginForm;
