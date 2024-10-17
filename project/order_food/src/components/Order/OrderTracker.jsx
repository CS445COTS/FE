import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
export default function OrderTracker({ activeStep }) {
  const steps = [
    "Đã đặt",
    "đơn hàng đã xác nhận",
    "đang giao",
    "Out For Delivery",
    "đang vận chuyển",
  ];
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
