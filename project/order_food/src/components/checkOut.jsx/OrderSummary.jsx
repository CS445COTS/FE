import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../State/Order/Action";
import { Button } from "@mui/material";
import AddressCard from "./AddressCard";
import CartItem from "../cart/CartItem";

export default function OrderSummary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);

  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border cursor-pointer">
        <AddressCard address={order.order?.shippingAdress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 ">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Chi tiết giá
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10 ">
                <div className="flex justify-between pt-3 text-black">
                  <span> giá</span>
                  <span>{order.order?.totalPrice} VNĐ</span>
                </div>
                <div className="flex justify-between pt-3 text-green-600">
                  <span>giá chiết khấu</span>
                  <span className="text-green-600">
                    {order.order?.discounted} VNĐ
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-green-600">
                  <span>phí vận chuyển</span>
                  <span className="text-green-600">miễn phí</span>
                </div>
                <div className="flex justify-between pt-3 text-green-600 font-bold">
                  <span>Tổng tiền</span>
                  <span className="text-green-600">
                    {order.order?.totalDiscountedPrice} VNĐ
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                sx={{ bgcolor: "#9155fd" }}
                className="w-full mt-5 "
              >
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
