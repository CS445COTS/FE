import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductFood.css";

export default function ProductCart({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          src={product.imageUrl}
          alt="food image"
          className="h-full w-full object-cover object-left-top"
        ></img>
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.price} VNĐ</p>
        </div>
      </div>
    </div>
  );
}
