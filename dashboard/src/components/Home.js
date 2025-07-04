import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:3001";
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002/verifyUser", // ✅ Make sure this exists in your backend
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        if (status) {
          setUsername(user.username || user);
          toast(`Hello ${user.username || user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          window.location.href = "http://localhost:3001";
        }
      } catch (error) {
        console.error("Verification failed", error);
        removeCookie("token");
        window.location.href = "http://localhost:3001";
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
