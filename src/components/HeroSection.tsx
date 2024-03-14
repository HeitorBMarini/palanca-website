"use client"; // this is a client component
import React from "react";


import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import TypingAnimation from "./TypingAnimation";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 
      my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex flex-col items-center">
          <img
            src="/banco-safra-logo.png"
            alt="banco-safra"
            width="500"
            height="500"
            className="rounded-full shadow-2xl max-w-72 max-h-72"
          />
          <h2 className="mt-4 text-center text-2xl font-semibold">
            Santiago Palanca
          </h2>
          <h2 className="text-center text-2xl font-bold">
            <span className="text-amber-400 font-bold text-2xl">DJ </span>&{" "}
            <span className="text-amber-400 font-bold text-2xl">
              Produtor Musical{" "}
            </span>{" "}
          </h2>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <TypingAnimation text="Olá, me chamo Dj Santiago" />

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Sou
            <span className="font-semibold text-amber-400"> Dj </span>
            Moro em São Paulo - Brasil, alguns dos meus eventos abaixo
          </p>
          <Link
            to="eventos"
            className="text-slate-100 cursor-pointer font-semibold px-6 py-3 shadow-md bg-amber-400 rounded  hover:bg-amber-400 "
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Eventos
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="sobre"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
