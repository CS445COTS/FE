import React from "react";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Grid } from "@mui/material";

export default function OrderCard() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover-top"
              src="https://static.kfcvietnam.com.vn/images/items/lg/10-TENDERS.jpg?v=3QX6mg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="mb-2">2 miếng gà giòn</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>1099 VNĐ</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p>
              <FiberManualRecordIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span>Được giao vào ngày 17/10/2024</span>
              <p>Đơn hàng của bạn đang được vận chuyển</p>
            </p>
          )}
          {false && (
            <p>
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
