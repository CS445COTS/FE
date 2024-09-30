import React from "react";
import DeliveryPage from "./DeliveryPage";
import BannerFood from "./BannerFood";

export default function ContentDelivery() {
  return (
    <div className="mt-10">
      <div>
        <BannerFood />
      </div>
      <div>
        <DeliveryPage />
      </div>
    </div>
  );
}
