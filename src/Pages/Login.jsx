import React, { useState } from "react";
import "../Style/Login.css";
import rasul from '../assets/pictures/imageRasul.jpg';
import zibeyde from '../assets/pictures/imageZibeyde.jpg';
import nazifa from '../assets/pictures/imageNazifa.jpg';
import photo from "../assets/loginImages/login-illustration.svg";
import photoRes from "../assets/loginImages/Group 240.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const allowedEmails = [
      "garavaliyevrasul531@gmail.com",
      "zibeydeceferli@gmail.com",
      "nazifagojayeva@gmail.com",
    ];

    
    if (!allowedEmails.includes(email)) {
      setError("Login is not allowed for this email!");
      toast.error("Login is not allowed for this email!");
      return;
    }

    const apiKey = "AIzaSyAyG34t6yFnMuYrg1IkTGR0HQUugxr6zco"; 
    const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
        returnSecureToken: true,
      });

      
      let fullName = "Admin"; 
      let profileImage = ""

      if (email === "garavaliyevrasul531@gmail.com") {
        fullName = "Rasul";
        profileImage = rasul;
      } else if (email === "zibeydeceferli@gmail.com") {
        fullName = "Zibeydə";
        profileImage = zibeyde;
      } else if (email === "nazifagojayeva@gmail.com") {
        fullName = "Nazifa";
        profileImage = nazifa;
      }

      
      toast.success("Login successful!", {
        onClose: () => navigate("/dashboardPage"),
      });

      
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("profileImage", profileImage);
      localStorage.setItem("token", response.data.idToken);

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorCode = error.response.data.error.message;
        switch (errorCode) {
          case "EMAIL_NOT_FOUND":
          case "INVALID_PASSWORD":
            setError("Incorrect email or password!");
            toast.error("Incorrect email or password!");
            break;
          case "USER_DISABLED":
            setError("Your account has been disabled.");
            toast.error("Your account has been disabled.");
            break;
          default:
            setError("An error occurred. Please try again.");
            toast.error("An error occurred. Please try again.");
        }
      } else {
        setError("An error occurred. Please try again.");
        toast.error("An error occurred. Please try again.");
      }
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
