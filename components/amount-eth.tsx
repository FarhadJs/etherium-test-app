import React from "react";
import { Input } from "@/components/ui/input";

import QrIcon from "@/styles/assets/Scanqr.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AmountEth = () => {
  return (
    <div className="relative">
      <span className="absolute right-14 z-30 top-[3px] p-1">ETH</span>
      <Button className="bg-[#00A692] text-black z-20 absolute w-12 h-7 p-2 right-2 top-1 rounded">
        MAX
      </Button>
      <Input type="number" placeholder="Amount:" />
    </div>
  );
};

export default AmountEth;
