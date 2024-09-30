import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Banner from "../banner/banner";
import ContentItem from "../product/ContentItem";
import ContentDelivery from "../delivery/ContentDelivery";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <ContentItem />
      <ContentDelivery />
      <Footer />
    </div>
  );
}
