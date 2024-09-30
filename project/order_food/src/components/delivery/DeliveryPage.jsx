import React from "react";
import delivery_banner from "../../Assets/images/delivery-banner-bg.png";
import delivery_boy from "../../Assets/images/delivery-boy.svg";
import "./DeliveryPage.css";
export default function DeliveryPage() {
  return (
    <div>
      <section class="section-delivery">
        <div class="container-delivery">
          <div class="delivery-content">
            <div class="text-content">
              <h2 class="h2 section-title">
                Đội Ngũ Giao Hàng <span class="span">Đúng thời điểm</span>& Địa
                điểm
              </h2>
              <p class="section-text">
                Đội ngũ giao hàng chuyên nghiệp, nhanh nhẹn sẽ đảm bảo đơn hàng
                của bạn được giao đúng giờ và trong tình trạng tốt nhất. Hãy đặt
                hàng ngay hôm nay để trải nghiệm dịch vụ giao hàng tiện lợi và
                những bữa ăn tuyệt vời từ nhà hàng của chúng tôi!
              </p>
              <button class="btn btn-hover">Đặt hàng ngay</button>
            </div>
            <div class="image-content">
              <img
                src={delivery_banner}
                width="700"
                height="602"
                loading="lazy"
                alt="clouds"
                class="w-100"
              />
              <img
                src={delivery_boy}
                width="1000"
                height="880"
                loading="lazy"
                alt="delivery boy"
                class="w-100 delivery-img"
                data-delivery-boy
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
