import React from "react";
import Navigation from "../navigation/Navigation";
import ContentItem from "../product/ContentItem";
import "./Menu.css";
import ProductFood from "../product/ProductFood";
import AboutUs from "../product/AboutUs";
import Banner from "../banner/banner";
export default function Menu() {
  return (
    <div>
      <div>
        <div>
          <Banner />
        </div>
        <div>
          <ProductFood title={"Thực đơn"} />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <ProductFood title={""} />
        </div>
      </div>
    </div>
  );
}
