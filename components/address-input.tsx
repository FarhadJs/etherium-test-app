"use client";
import React from "react";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QrIcon from "@/assets/Scanqr.svg";
import Image from "next/image";

export const AddressInput = () => {
  return (
    <>
      <div className="relative">
        <Dialog>
          <DialogTrigger className="hover:bg-gray-100 p-1 rounded hover:bg-opacity-10 absolute flex items-center justify-center gap-1 z-20 bg-transparent top-0.5 right-0.5 transition-all active:scale-95">
            <span>Paste</span>
            <Image alt="qrcode scan icon" src={QrIcon} className="w-6 h-6" />
          </DialogTrigger>
          <DialogContent className="bg-neutral-800">
            <DialogHeader>
              <DialogTitle>QR Scan Code</DialogTitle>
              <DialogDescription className="flex items-center justify-center">
                <Image alt="qrcode" src={QrIcon} className="w-44 h-44 opacity-20" />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Input type="text" placeholder="Address:" className="" />
      </div>
    </>
  );
};
export default AddressInput;
