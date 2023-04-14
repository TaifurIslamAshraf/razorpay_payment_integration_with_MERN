import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-4xl font-bold mb-3">Payment Successfull</h1>
      <p className="font-semibold text-lg">Reference No. {referenceNum}</p>
    </div>
  );
};

export default PaymentSuccess;
