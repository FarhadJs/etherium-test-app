"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectInput = () => {
  const feeLevel = ["1-10", "10-20", "20-30", "30-40", "40-50", "5-60"];
  return (
    <div>
      Fee level
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10-40">10-40</SelectItem>
          <SelectItem value="40-80">40-80</SelectItem>
          <SelectItem value="80-120">80-120</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;
