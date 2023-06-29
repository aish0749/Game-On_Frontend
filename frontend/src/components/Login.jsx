import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h3>Login</h3>
      <input type="text" placeholder="input username" />
      <input type="password" placeholder="input password" />
      <button className="cta-btn">Login</button>
    </div>
  );
};

export default Login;