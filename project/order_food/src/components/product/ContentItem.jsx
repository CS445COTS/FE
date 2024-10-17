import React from "react";
import ProductFood from "./ProductFood";
import AboutUs from "./AboutUs";

export default function ContentItem() {
  return (
    <div>
      <div>
        <ProductFood title={"Sản Phẩm"} />
      </div>
      <div className="mt-5">
        <AboutUs />
      </div>
    </div>
  );
}
