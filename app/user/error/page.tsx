"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CustomerErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-rose-500 ">{error}!</h1>
      <h2 className="text-4xl text-gray-800 font-extrabold leading-tight tracking-tight">
        Something went wrong!
      </h2>
    </div>
  );
};

export default CustomerErrorPage;
