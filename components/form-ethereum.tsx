"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import AddressInput from "@/components/address-input";
import AmountEth from "./amount-eth";
import SelectInput from "./select-input";

const FormSApp = () => {
  return (
    <div className="bg-[#16191E] text-white text-opacity-50 p-4 pt-2 rounded w-96">
      <h1 className="pb-3">Send</h1>
      <div className="flex flex-col gap-3">
        <AddressInput />
        <AmountEth />
        <SelectInput />
        <Button className="bg-[#00A694] rounded-full">Preview Transfer</Button>
      </div>
    </div>
  );
};

export default FormSApp;
