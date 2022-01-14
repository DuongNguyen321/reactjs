import {Link } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

const navbarItems = [
  {
    id: 1,
    text: "Trang chủ",

    href: "/",
  },
  {
    id: 2,
    text: "Đặt Lịch",

    href: "/book",
  },
  {
    id: 3,
    text: "Ưu Đãi",

    href: "/packages",
  },
];

function Header(props) {
  return (
    <header>
      <div id="menu-bar">
        <i className="bi bi-list"></i>
      </div>
      <div className="fas fa-bars"></div>
      <a href="index.html" className="logo">
        <span>S</span>Travel
      </a>
      <nav className="navbar">
        {navbarItems.map((navbarItems) => {
          return (
            <Link key={navbarItems.id} to={navbarItems.href}>
              {navbarItems.text}
            </Link>
          );
        })}
      </nav>
      <div className="icons">
        <i className="bi bi-moon btn-toggle"></i>
        <i className="bi bi-search" id="search-btn"></i>
        <i className="bi bi-person login-btn"></i>
      </div>
      <form action="true" className="search-bar-container">
        <input type="search" id="search-bar" placeholder="Tìm kiếm..." />
        <label htmlFor="search-bar" className="fas fa-search" />
      </form>
    </header>
  );
}

export default Header;
