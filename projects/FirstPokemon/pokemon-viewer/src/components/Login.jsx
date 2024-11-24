// src/components/Login.js
import React, { useState } from "react";

const Login = ({ userList, setLoggedInUser, setCurrentScreen }) => {
    const [userName, setUserName] = useState("");

    const loginUser = () => {
        const user = userList.find((user) => user.name === userName.trim());
        if (!user) {
            alert("User not found. Please try again or create a new account.");
            return;
        }
        setLoggedInUser(user);
        setCurrentScreen("user");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Login to Your Account</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="input-field"
            />
            <button onClick={loginUser} className="button-primary">
                Login
            </button>
            <button onClick={() => setCurrentScreen("main")} className="button-danger">
                Back
            </button>
        </div>
    );
};

export default Login;
