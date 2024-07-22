import React, { useState } from "react";
import "../Style/Login.css";
import photo from "../assets/loginImages/login-illustration.svg";
import photoRes from "../assets/loginImages/Group 240.png"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!", {
        onClose: () => navigate("/dashboardPage"),
      });
    } catch (error) {
      toast.error("Your password or email is incorrect!");
      setError("Your password or email is incorrect!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <h2 className="welcome">Welcome Admin</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
            <button type="submit" className="login-button">
              Sign In
            </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
        <div className="login-image">
          <img className="image1" src={photo} alt="Login Illustration" />
          <img className="image2" src={photoRes} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
