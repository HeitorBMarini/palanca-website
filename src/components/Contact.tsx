import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoWhatsapp, BiLogoGmail, BiLogoSpotify } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contato" className="text-white">
      <div className="container mx-auto mt-12 pb-8 md:pt-16 md:pb-48 px-4">
        <h1 className="text-center font-bold text-4xl">
          Contato
          <hr className="w-8 h-1 mx-auto my-4 bg-red-700 border-0 rounded "></hr>
        </h1>

        {/* Contato Direto & Redes Sociais e Playlists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mt-16">
          {/* Contato Direto */}
          <div>
            
            <div className="flex flex-col space-y-6 items-center">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B5511854624400&text&app_absent=0"
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center"
              >
                <BiLogoWhatsapp size={55} className="text-green-500 cursor-pointer hover:-translate-y-1 transition-transform" />
                
              </a>

              <a
                href="mailto:yourmail@example.com" // Substitua pelo seu e-mail real
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center"
              >
                <BiLogoGmail size={55} className="text-slate-100 cursor-pointer hover:-translate-y-1 transition-transform" />
                
              </a>
            </div>
          </div>

          {/* Redes Sociais e Playlists */}
          <div>
            
            <div className="flex flex-col space-y-6 items-center">
              <a
                href="https://www.instagram.com/santiagopalanca/"
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center"
              >
                <AiOutlineInstagram size={55} className="text-rose-500 cursor-pointer hover:-translate-y-1 transition-transform" />
               
              </a>

              <a
                href="https://open.spotify.com/user/sanpalanca?si=37eaf80e690c4e7d"
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center"
              >
                <BiLogoSpotify size={55} className="text-green-600 cursor-pointer hover:-translate-y-1 transition-transform" />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
