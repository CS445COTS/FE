import React from "react";
import banner_1 from "../../Assets/images/banner-1.jpg";
import banner_2 from "../../Assets/images/banner-2.jpg";
import banner_3 from "../../Assets/images/banner-3.jpg";
import banner_4 from "../../Assets/images/banner-4.jpg";
import "./BannerFood.css";
export default function BannerFood() {
  return (
    <div>
      <section class="section-banner">
        <div class="container-banner">
          <ul class="banner-list">
            <li class="banner-item banner-lg">
              <div class="banner-card">
                <img
                  src={banner_1}
                  alt="Discount For Delicious Tasty Burgers!"
                  class="banner-img"
                />
                <div class="banner-item-content">
                  <p class="banner-subtitle">50% Off Now!</p>
                  <h3 class="banner-title">Giảm giá mì ý spaghetti!</h3>
                  <p class="banner-text"></p>
                  <br />
                  <button class="btn">Đặt hàng ngay</button>
                </div>
              </div>
            </li>

            <li class="banner-item banner-sm">
              <div class="banner-card">
                <img src={banner_2} alt="Delicious Pizza" class="banner-img" />
                <div class="banner-item-content">
                  <h3 class="banner-title">Pizza ngon tuyệt</h3>
                  <p class="banner-text">50% off Now</p>
                  <br />
                  <button class="btn">Đặt hàng ngay</button>
                </div>
              </div>
            </li>

            <li class="banner-item banner-sm">
              <div class="banner-card">
                <img src={banner_3} alt="American Burgers" class="banner-img" />
                <div class="banner-item-content">
                  <h3 class="banner-title">American Burgers</h3>
                  <p class="banner-text">50% off Now</p>
                  <br />
                  <button class="btn">Đặt hàng ngay</button>
                </div>
              </div>
            </li>

            <li class="banner-item banner-md">
              <div class="banner-card">
                <img
                  src={banner_4}
                  alt="Tasty Buzzed Pizza"
                  class="banner-img"
                />
                <div class="banner-item-content">
                  <h3 class="banner-title">Pizza Buzzed</h3>
                  <p class="banner-text">Giảm giá 50% chỉ trong tuần này</p>
                  <br />
                  <button class="btn">Đặt hàng ngay</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
