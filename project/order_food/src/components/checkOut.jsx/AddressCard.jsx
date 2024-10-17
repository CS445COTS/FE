import React from "react";

export default function AddressCard({ address }) {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address?.firstName + " " + address?.lastName}
        </p>
        <p>
          {address?.ward},{address?.streetAddress},{address?.zipCode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Số điện thoại</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
}
