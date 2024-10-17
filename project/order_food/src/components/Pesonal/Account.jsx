import React from "react";
import image_hungprozz from "../../Assets/images/anhhungprozz.jpg";
import "./Account.css";
export default function Account() {
  return (
    <>
      <div class="personal-page">
        <div class="sidebar">
          <div class="profile">
            <img
              src={image_hungprozz}
              alt="Profile Image"
              class="profile-img"
            />
            <span class="username">Minh Dung</span>
          </div>
          <a href="#" class="edit-profile">
            {" "}
            <i class="bx bxs-pencil"></i> Sửa Hồ Sơ
          </a>

          <ul class="menu-personal">
            <li>
              <i class="bx bxs-user"></i>
              <a href="#">Hồ Sơ</a>
            </li>
            <li>
              <i class="bx bxs-bank"></i>
              <a href="#">Ngân Hàng</a>
            </li>
            <li>
              <i class="bx bxs-map"></i>
              <a href="#">Địa Chỉ</a>
            </li>
            <li>
              <i class="bx bxs-lock"></i>
              <a href="#">Đổi Mật Khẩu</a>
            </li>
            <li>
              <i class="bx bxs-bell"></i>
              <a href="#">Cài Đặt Thông Báo</a>
            </li>
            <li>
              <i class="bx bxs-cog"></i>
              <a href="#">Những Thiết Lập Riêng Tư</a>
            </li>
          </ul>
        </div>

        <div class="profile-details">
          <h1>Hồ Sơ Của Tôi</h1>
          <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
          <form class="profile-form">
            <div class="form-left">
              <label for="username">Tên đăng nhập</label>
              <input
                type="text"
                id="username"
                name="username"
                value="minhdung0408"
                readonly
              />

              <label for="email">Email</label>
              <input
                type="text"
                id="name"
                name="name"
                value="minhdung@gmail.com"
              />

              <label for="phone">Số điện thoại</label>
              <input type="text" id="phone" name="phone" value="********79" />
              <a href="#" class="change-phone">
                Thay Đổi
              </a>

              <label>Giới tính</label>
              <div class="gender-options">
                <input type="radio" name="gender" value="Nam" checked /> Nam
                <input type="radio" name="gender" value="Nữ" /> Nữ
                <input type="radio" name="gender" value="Khác" /> Khác
              </div>

              <label for="dob">Ngày sinh</label>
              <input type="text" id="dob" name="dob" value="04/08/2003" />

              <button type="submit">Lưu</button>
            </div>
            <div class="form-right">
              <img
                src={image_hungprozz}
                alt="Profile Image"
                class="profile-img-large"
              />
              <button type="button" class="upload-btn">
                Chọn Ảnh
              </button>
              <p>Dung lượng file tối đa 1 MB Định dạng: .JPEG, .PNG</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
