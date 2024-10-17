import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

export default function ReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              H
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Đức hưng</p>
              <p className="opacity-70">Ngày 23 tháng 7 2024</p>
            </div>
          </div>

          <Rating value={4.5} name="half-rating" readOnly></Rating>
          <p>Đồ ăn ngon yeah yeah</p>
        </Grid>
      </Grid>
    </div>
  );
}
