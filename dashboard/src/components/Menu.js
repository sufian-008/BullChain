import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
//  I have to solve cookies verification here.

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username] = useState("User");

  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);

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
          <div className="avatar">{username.charAt(0).toUpperCase()}</div>
          <p className="username">{username}</p>
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
