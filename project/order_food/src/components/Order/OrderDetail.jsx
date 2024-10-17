import React from "react";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star } from "@mui/icons-material";
import AddressCard from "../checkOut.jsx/AddressCard";
import OrderTracker from "./OrderTracker";
export default function OrderDetail() {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-10">Địa chỉ giao hàng</h1>
        <AddressCard />
      </div>
      <div className="py-10">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, , 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4 ">
                <img
                  className="w-[5rem] h-[5rem]"
                  src="https://static.kfcvietnam.com.vn/images/items/lg/1-new.jpg?v=3QX6mg"
                ></img>

                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Gà Xốt Xiêm Xanh</p>
                  <p>40 VNĐ</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <Star sx={{ fontSize: "2rem" }} className="px-2 " />
                <span>Đánh giá và nhận xét sản phẩm</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
