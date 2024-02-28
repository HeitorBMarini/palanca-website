import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoWhatsapp, BiLogoGmail, BiLogoSpotify } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contato">
      <div className="mt-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Contato
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h1>

        <div className="w-full flex justify-center items-center text-center p-4 flex-col md:flex-row md:space-x-10">
          <div className="space-y-4 md:space-y-0 md:space-x-6 mt-16 flex flex-col md:flex-row items-center">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511854624400&text&app_absent=0"
              rel="noreferrer"
              target="_blank"
            >
              <BiLogoWhatsapp
                className="hover:-translate-y-1 transition-transform cursor-pointer text-green-500 dark:text-green-500"
                size={55}
              />
            </a>

            <a href="/" rel="noreferrer" target="_blank">
              <BiLogoGmail
                className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-200 dark:text-white-500"
                size={55}
              />
            </a>

            <a
              href="https://www.instagram.com/santiagopalanca/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineInstagram
                className="hover:-translate-y-1 transition-transform cursor-pointer text-rose-500 dark:text-rose-600"
                size={55}
              />
            </a>

            <a
              href="https://open.spotify.com/user/sanpalanca?si=37eaf80e690c4e7d"
              rel="noreferrer"
              target="_blank"
            >
              <BiLogoSpotify
                className="hover:-translate-y-1 transition-transform cursor-pointer text-green-500 dark:text-green-500"
                size={55}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
