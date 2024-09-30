import React from "react";
import "./AboutUs.css";
import about_banner from "../../Assets/images/about-banner.png";
import sale_shape_red from "../../Assets/images/sale-shape-red.png";

export default function AboutUs() {
  return (
    <div>
      <section class="section-about" id="about">
        <div class="container-about">
          <div class="about-banner">
            <img
              src={about_banner}
              width="509"
              height="459"
              loading="lazy"
              alt="Burger with Drinks"
              class="w-100 about-img"
            />

            <img
              src={sale_shape_red}
              width="216"
              height="226"
              alt="get up to 50% off now"
              class="abs-img scale-up-anim"
            />
          </div>

          <div class="about-content">
            <h2 class="h2 section-title">
              DNOF
              <span class="span">Đà Nẵng!</span>
            </h2>

            <p class="section-text">
              Là điểm đến yêu thích của những tín đồ đam mê ẩm thực nhanh tại
              thành phố biển. Với không gian hiện đại và thực đơn phong phú từ
              burger, pizza đến gà rán, quán đã nhanh chóng chiếm được cảm tình
              của cả người dân địa phương lẫn khách du lịch. .
            </p>

            <ul class="about-list">
              <li class="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>
                <span class="span">Thực phẩm ngon và lành mạnh</span>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>
                <span class="span">
                  Khu vực dành cho gia đình và trẻ em rộng rãi
                </span>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>
                <span class="span">Âm nhạc & Các tiện nghi khác</span>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>
                <span class="span">Giao đồ ăn tận nhà nhanh nhất</span>
              </li>
            </ul>

            <button class="btn-about btn-hover">ĐẶT HÀNG NGAY</button>
          </div>
        </div>
      </section>
    </div>
  );
}
