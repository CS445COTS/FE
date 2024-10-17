import React from "react";
import Navigation from "../navigation/Navigation";
import "./Service.css";
import Footer from "../footer/Footer";

export default function () {
  return (
    <div>
      <div className="">
        <section id="service">
          <div class="row-grid">
            <p class="heading-text">DỊCH VỤ</p>
          </div>
          <div class="image-container">
            <img
              src="https://jollibee.com.vn/media/services/2.png"
              alt=""
              class="promo-image"
            />
            <div class="promo-text">
              <h2>Đặt Tiệc Sinh Nhật</h2>
              <p>
                Bạn đang tìm ý tưởng cho một buổi tiệc sinh nhật thật đặc biệt
                dành cho con của bạn? Hãy chọn những bữa tiệc của Da Nang Oder
                Food. Sẽ có nhiều điều vui nhộn và rất đáng nhớ dành cho con của
                bạn.
              </p>
              <button class="promo-btn">Xem Thêm</button>
            </div>
          </div>
          <div class="image-container">
            <img
              src="https://jollibee.com.vn/media/services/3.png"
              alt=""
              class="promo-image"
            />
            <div class="promo-text">
              <h2>Da Nang Oder Food Kid Club</h2>
              <p>
                Hãy để con bạn thoả thích thể hiện và khám phá tài năng bên
                trong của mình cùng cơ hội gặp gỡ những bạn đồng lứa khác tại
                DNOF Kids Club. Cùng tìm hiểu thêm thông tin về DNOF Kids Club
                và tham gia ngay.
              </p>
              <button class="promo-btn">Xem Thêm</button>
            </div>
          </div>
          <div class="image-container">
            <img
              src="https://jollibee.com.vn/media/services/4.png"
              alt=""
              class="promo-image"
            />
            <div class="promo-text">
              <h2>Đơn Hàng Lớn</h2>
              <p>
                Để phục vụ sở thích quây quần cùng gia đình và bạn bè, chương
                trình chiết khấu hấp dẫn dành cho những đơn hàng lớn đã ra đời
                để đem đến những lựa chọn tiện lợi hơn cho bạn. Liên hệ ngay với
                cửa hàng gần nhất để được phục vụ.
              </p>
              <button class="promo-btn">Xem Thêm</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
