import React from "react";

import { FaHeadphonesSimple } from "react-icons/fa6";

export default function Header() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 Santiago Palanca<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <FaHeadphonesSimple
            className=" mt-4 transition-transform  text-amber-500 md:mt-2 md:mb-2"
            size={30}
          />
        </div>
      </div>
    </footer>
  );
}
