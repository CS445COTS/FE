import React from "react";
import { BannerData } from "./bannerData";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

export default function Banner() {
  const items = BannerData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt="food_banner"
      style={{
        width: "100%",
        objectFit: "cover",
        height: "500px",
      }}
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
}
