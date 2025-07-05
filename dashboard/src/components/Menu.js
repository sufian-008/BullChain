import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002/verifyUser",
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        if (status) {
          setUsername(user.username || user);
          toast.success(`Hello ${user.username || user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          navigate("/");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        removeCookie("token");
        navigate("/");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    removeCookie("token");
    navigate("/");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={() => handleMenuClick(6)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">{username ? username.charAt(0).toUpperCase() : "U"}</div>
          <p className="username">{username || "User"}</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="dropdown">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Menu;
