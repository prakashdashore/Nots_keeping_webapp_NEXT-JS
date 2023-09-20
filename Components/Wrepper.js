"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";


const Wrepper = ({ children }) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  );
};

export default Wrepper;
