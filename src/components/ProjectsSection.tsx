import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare } from "react-icons/bs";

const eventos = [
  {
    name: "Video",
    description: "Video",
    video: "/teste.mp4", // Substitua isso pelo caminho correto do arquivo de vídeo
  },
  {
    name: "Outro Video",
    description: "Outro projeto interessante em vídeo",
    video: "/path/to/another/video/file.mp4", // Substitua isso pelo caminho correto do arquivo de vídeo
    link: "https://example.com/another-project",
  },
  // Adicione mais eventos conforme necessário
];

const Events = () => {
  return (
    <section id="eventos">
      <h1 className="my-10 text-center font-bold text-4xl">
        Eventos
        <hr className="w-8 h-1 mx-auto my-4  bg-amber-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col  space-y-28">
        {eventos.map((evento, idx) => {
          return (
            <div key={idx}>
              {/* O componente SlideUp pode precisar ser ajustado ou removido dependendo da sua implementação */}
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col mt-4 md:flex-row md:items-center md:space-x-12">
                  <div className="md:w-1/2 flex justify-center">
                    <video
                      src={evento.video}
                      style={{
                        maxWidth: "90%", // Assegura que o vídeo não exceda a largura do contêiner
                        aspectRatio: "1 / 1", // Mantém uma proporção quadrada
                      }}
                      className="video-fade-in rounded-xl shadow-xl hover:opacity-70"
                      controls // Adiciona controles de reprodução
                    ></video>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
                      {evento.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                      {evento.description}
                    </p>
                    <div className="flex flex-row mt-5 justify-center md:justify-start space-x-4">
                      <a
                        href={evento.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;
