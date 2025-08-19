import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState(""); 
  const [otpStep, setOtpStep] = useState(false); // OTP step toggle
  const [tempToken, setTempToken] = useState(null); // Store token/session from login

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const { data } = await axios.post(
        "https://bullchain.onrender.com/api/login",
        inputValue,
        { withCredentials: true }
      );

      const { success, message, requiresOtp, token } = data;

      if (success && requiresOtp) {
        handleSuccess("Login successful! OTP sent to your email.");
        setOtpStep(true); // Show OTP input
        setTempToken(token); // Save temporary token for OTP verification
      } else if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      handleError(error.response?.data?.message || "Login failed");
    }
  };

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    if (!otp) return handleError("Please enter OTP");

    try {
      const { data } = await axios.post(
        "https://bullchain.onrender.com/api/verify-otp",
        { otp, token: tempToken },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess("OTP verified successfully!");
        setTimeout(() => {
          window.location.href = "https://bull-chain-42g4.vercel.app";
        }, 1000);
      } else {
        handleError(message || "Invalid OTP");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      handleError(error.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="form_container">
      <h2>{otpStep ? "Enter OTP" : "Login"}</h2>

      {!otpStep ? (
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Login</button>
          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
      ) : (
        <form onSubmit={handleOtpVerify}>
          <div>
            <label>OTP</label>
            <input
              type="text"
              value={otp}
              placeholder="Enter OTP"
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      )}

      <ToastContainer />
    </div>
  );
};

export default Login;
