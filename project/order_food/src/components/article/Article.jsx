import React from "react";
import "./Article.css";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

export default function Article() {
  return (
    <div>
      <div className="">
        <section class="blog">
          <img
            style={{ width: "100%", paddingTop: "45px" }}
            src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/Desktop%20-%20Vie_Q4H9R_041020240641.jpg"
            alt=""
          />
          <div class="row-grid">
            <p class="heading-text">Bài viết</p>
          </div>
          <div class="blog-list">
            <article class="blog-card">
              <div class="card-banner">
                <img
                  src="https://api.popeyes.vn/api/v1/files/ComboBurgerGaPhileB.webp"
                  alt="Combo Burger Gà Phile"
                  class="card-image"
                />
                <div class="badge">Bestseller</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">Combo Burger Gà</h3>
                <p class="card-text">
                  Combo Burger Gà Phile kết hợp gà phile chiên giòn với bánh mì
                  mềm mại, kèm rau sống và sốt đặc biệt, mang đến trải nghiệm ẩm
                  thực hoàn hảo.
                </p>
                <a href="#" class="read-more">
                  <i class="bx bx-right-arrow-alt"></i> Xem thêm
                </a>
              </div>
            </article>

            <article class="blog-card">
              <div class="card-banner">
                <img
                  src="https://api.popeyes.vn/api/v1/files/ShrimpBurger.webp"
                  alt="Burger Tôm"
                  class="card-image"
                />
                <div class="badge">Burger</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">Burger Tôm</h3>
                <p class="card-text">
                  Burger Tôm là món ăn lý tưởng cho tín đồ hải sản, với lớp tôm
                  chiên giòn và rau sống tươi ngon, mang đến trải nghiệm độc
                  đáo.
                </p>
                <a href="#" class="read-more">
                  <i class="bx bx-right-arrow-alt"></i> Xem thêm
                </a>
              </div>
            </article>

            <article class="blog-card">
              <div class="card-banner">
                <img
                  src="https://api.popeyes.vn/api/v1/files/1PCDrumstick.webp"
                  alt="Gà Rán"
                  class="card-image"
                />
                <div class="badge">Chicken</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">Gà Rán</h3>
                <p class="card-text">
                  Gà Rán giòn tan bên ngoài, thịt mềm bên trong, món ăn tuyệt
                  vời cho mọi bữa tiệc và bữa ăn nhẹ.
                </p>
                <a href="#" class="read-more">
                  <i class="bx bx-right-arrow-alt"></i> Xem thêm
                </a>
              </div>
            </article>
            <article class="blog-card">
              <div class="card-banner">
                <img
                  src="https://api.popeyes.vn/api/v1/files/ComboFamilyB.webp"
                  alt="Combo Gia Đình"
                  class="card-image"
                />
                <div class="badge">Combo Gia Đình</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">Combo Gia Đình</h3>
                <p class="card-text">
                  Combo Gia Đình là sự kết hợp giữa các món ăn yêu thích, lý
                  tưởng cho bữa ăn quây quần cùng gia đình.
                </p>
                <a href="#" class="read-more">
                  <i class="bx bx-right-arrow-alt"></i> Xem thêm
                </a>
              </div>
            </article>

            <article class="blog-card">
              <div class="card-banner">
                <img
                  src="https://api.popeyes.vn/api/v1/files/ComboFamilyB.webp"
                  alt="Combo Gia Đình"
                  class="card-image"
                />
                <div class="badge">Combo Gia Đình</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">Combo Gia Đình</h3>
                <p class="card-text">
                  Combo Gia Đình là sự kết hợp giữa các món ăn yêu thích, lý
                  tưởng cho bữa ăn quây quần cùng gia đình.
                </p>
                <a href="#" class="read-more">
                  <i class="bx bx-right-arrow-alt"></i> Xem thêm
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
