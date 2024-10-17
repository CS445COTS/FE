import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../State/Cart/Action";
import { Button, Divider } from "@mui/material";
import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);
  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative">
      <div className="col-span-2 content">
        {cart.cart?.cartIems.map((item) => (
          <CartItem item={item} />
        ))}
      </div>

      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border content">
          <p className="uppercase font-bold text-red-600 pb-4">Giá Chi tiết</p>
          <hr />
          <div className="space-y-3 font-semibold mb-10 ">
            <div className="flex justify-between pt-3 text-black">
              <span> Giá</span>
              <span>{cart.cart?.totalPrice} VNĐ</span>
            </div>
            <div className="flex justify-between pt-3 text-green-600">
              <span>Chiết Khấu</span>
              <span className="text-green-600">
                {cart.cart?.discounted} VNĐ
              </span>
            </div>
            <div className="flex justify-between pt-3 text-green-600">
              <span>Giá vận chuyển</span>
              <span className="text-green-600">miễn phí</span>
            </div>
            <div className="flex justify-between pt-3 text-green-600 font-bold">
              <span>Tổng Giá</span>
              <span className="text-green-600">
                {cart.cart?.totalDiscountedPrice} VNĐ
              </span>
            </div>
          </div>
          <Button
            onClick={handleCheckOut}
            variant="contained"
            sx={{ bgcolor: "#9155fd" }}
            className="w-full mt-5 "
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
}
