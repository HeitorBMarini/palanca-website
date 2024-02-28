"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },

  {
    url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = (newIndex: React.SetStateAction<number>) => {
    setIsTransitioning(true); // Inicia a transição
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false); // Termina a transição
    }, 500); // A duração deve corresponder ao tempo de transição CSS
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    changeSlide(slideIndex);
  };

  // Adiciona o useEffect para mudar o slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Chama a função nextSlide a cada 3 segundos
    }, 3000); // 3000 ms = 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [currentIndex]); // Dependências: recria o intervalo quando currentIndex muda

  return (
    <section id="sobre">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre
          <hr className="w-8 h-1 mx-auto my-4 bg-red-700 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="py-16 relative group">
              <div className="w-full relative" style={{ paddingTop: "56.25%" }}>
                <div
                  style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isTransitioning ? 0 : 1, // Aplica opacidade baseada no estado de transição
                  }}
                  className="absolute top-0 left-0 right-0 bottom-0 bg-center bg-cover rounded-2xl"
                ></div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
              </div>
              <div className="flex justify-center py-2 space-x-1">
                {slides.map((_slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`text-2xl cursor-pointer ${
                      slideIndex === currentIndex
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center ">
              <Image
                src="/banco-safra-logo.png"
                alt="Banco Safra Logo"
                width={150}
                height={150}
                className="mx-auto my-14 items-center justify-center"
              />

              <div className="w-full max-w-4xl flex flex-col justify-center items-center text-center space-y-4">
                <h1 className="text-2xl font-bold mb-6">Minha história!</h1>
                <p>
                  Sou o Santiago Palanca
                  <span className="font-bold"> self-motivated </span> systems
                  analyst based in São Paulo, BR.
                </p>
                <p>
                  I graduated from São Paulo State University, FIAP in 2023 on
                  technologist, with a systems analyst and have been working in
                  the field since mid year 2023.
                </p>
                <p>
                  I have a wide range of hobbies and passions that keep me busy.
                  From studying, playing video games, riding a motorcycle, and
                  searching about the world, I am always seeking new experiences
                  and love to keep myself engaged and learning new things.
                </p>
                <p>
                  
                  buscando aprender mais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
