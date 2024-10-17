import React from "react";
import anhhungprozz from "../../Assets/images/anhhungprozz.jpg";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <section id="sidebar">
        <a href="#" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">AdminDNOF</span>
        </a>
        <ul class="side-menu top">
          <li class="active">
            <a href="#">
              <i class="bx bxs-dashboard"></i>
              <span class="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Quản lý sản phẩm</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-contact"></i>
              <span class="text">Quản lý tài khoản</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-package"></i>
              <span class="text">Quản lý đơn hàng</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-bar-chart-alt"></i>
              <span class="text">Thống kê</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#">
              <i class="bx bxs-cog"></i>
              <span class="text">Cài đặt</span>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class="bx bxs-log-out-circle"></i>
              <span class="text">Đăng xuất</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i class="bx bx-menu"></i>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label for="switch-mode" class="switch-mode"></label>
          <a href="#" class="notification">
            <i class="bx bxs-bell"></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src={anhhungprozz} />
          </a>
        </nav>
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a class="active" href="#">
                    Trang chủ
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" class="btn-download">
              <i class="bx bxs-cloud-download"></i>
              <span class="text">Download PDF</span>
            </a>
          </div>

          <ul class="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>120</h3>
                <p>Đơn hàng</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group"></i>
              <span class="text">
                <h3>2134</h3>
                <p>Khách thăm quan</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-dollar-circle"></i>
              <span class="text">
                <h3>$2543</h3>
                <p>Tổng doanh số</p>
              </span>
            </li>
          </ul>

          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Đơn hàng gần đây</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Người dùng</th>
                    <th>Ngày tạo</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={anhhungprozz} />
                      <p>Minh Dũng</p>
                    </td>
                    <td>26-09-2024</td>
                    <td>
                      <span class="status pending">Chưa giải quyết</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={anhhungprozz} />
                      <p>Tấn Tài</p>
                    </td>
                    <td>26-09-2024</td>
                    <td>
                      <span class="status pending">Chưa giải quyết</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={anhhungprozz} />
                      <p>Phúc Tâm</p>
                    </td>
                    <td>26-09-2024</td>
                    <td>
                      <span class="status process">Đang vận chuyển</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={anhhungprozz} />
                      <p>Đức Hưng</p>
                    </td>
                    <td>26-09-2024</td>
                    <td>
                      <span class="status process">Đang vận chuyển</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={anhhungprozz} />
                      <p>Minh Nhật</p>
                    </td>
                    <td>26-09-2024</td>
                    <td>
                      <span class="status completed">Hoàn Thành</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={anhhungprozz} />
                      <p>Anh Lớn</p>
                    </td>
                    <td>26-09-2024</td>
                    <td>
                      <span class="status completed">Hoàn Thành</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
