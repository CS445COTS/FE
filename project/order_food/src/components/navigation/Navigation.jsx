import React, { useState } from "react";
import logo from "../../Assets/images/logoo.png";
import "./Navigation.css";
export default function Navigation() {
  const [inputSearch, setInputSearch] = useState(false);

  const handleInputSeach = () => {
    setInputSearch(!inputSearch);
  };
  return (
    <div>
      <header>
        <div class="container">
          <div class="row-flex">
            <div class="header-logo">
              <img src={logo} alt="" />
            </div>
            <div class="header-nav active">
              <nav>
                <ul>
                  <li>
                    <a href="">Trang Chủ</a>
                  </li>
                  <li>
                    <a href="">Thực Đơn</a>
                  </li>
                  <li>
                    <a href="">Bài Viết </a>
                  </li>
                  <li>
                    <a href="">Dịch Vụ</a>
                  </li>
                  <li>
                    <a href="">Liên Hệ</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header-icons">
              <div onClick={handleInputSeach}>
                <a href="#" id="search-icon">
                  <i class="bx bx-search"></i>
                </a>
              </div>
              {inputSearch && (
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search..."
                  style={{ display: "inline-block" }}
                />
              )}
              <a href="#">
                <i class="bx bxs-user"></i>
              </a>
              <a href="#">
                <i class="bx bxs-shopping-bag"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
