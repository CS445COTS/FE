import React from "react";
import Banner from "../banner/banner";
import ContentItem from "../product/ContentItem";
import ContentDelivery from "../delivery/ContentDelivery";

export default function Home() {
  return (
    <div>
      <Banner />
      <ContentItem />
      <ContentDelivery />
    </div>
  );
}
