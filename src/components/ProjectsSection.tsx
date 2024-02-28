import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import {  BsArrowUpRightSquare } from "react-icons/bs"

const eventos = [
  {
    name: "Video",
    description:
      "Video ",
    image: "/eye crop.png",
    link: "https://www.instagram.com/p/CyT7_MQg_e5/",
  },
  {
    name: "Tailwind-Css Spotify",
    description: "A Front-End project with the template of Spotify, made with Tailwind-css and next js",
    image: "/Spotify.png",
    
    link: "https://tailwind-css-spotify-l9o9.vercel.app/",
  },
  {
    name: "WebSocket - React JS",
    description:
      "A basic WebSocket project with React JS",
    image: "/WebSocket.png",
    
    link: "https://web-socket-react.vercel.app/",
  },
  {
    name: "Kanban Flow - React JS",
    description:
      "A project type Kambam for control your tasks",
    image: "/Kanbam.png",github: "https://github.com/HeitorBMarini/Reactjs-KanbamFlow?tab=readme-ov-file",
    link: "https://5n8cgr.csb.app",
  },
]


const Events = () => {
  return (
    <section id="eventos">
      <h1 className="my-10 text-center font-bold text-4xl">
        Eventos
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {eventos.map((evento, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={evento.link}>
                      <Image
                        src={evento.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>

                    
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{evento.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {evento.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      
                      <Link href={evento.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default Events