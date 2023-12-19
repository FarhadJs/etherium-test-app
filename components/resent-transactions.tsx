"use client";
import React, { useState } from "react";

const ResentTransactions = () => {
  const [is_listUpdate, setList_isUpdate] = useState(true);
  return (
    <div className="bg-[#16191E] text-white text-opacity-50 p-4 pt-2 rounded w-96">
      <h1>ResentTransactions</h1>
      <div className="w-full flex items-center mt-5">
        <span className="mx-auto text-sm">
          {is_listUpdate ? "You don not have any activity yet." : ""}
        </span>
      </div>
    </div>
  );
};

export default ResentTransactions;
