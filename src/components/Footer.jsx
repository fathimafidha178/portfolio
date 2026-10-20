import React from "react";

const Footer = () => {

  return (
    <footer className="bg-zinc-950 border-t border-gray-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-black">
              Fathima
              <span className="text-orange-500"> Fidha</span>
            </h2>

            <p className="text-gray-500 mt-2">
              Full Stack MERN Developer
            </p>

          </div>

          <div className="flex gap-6">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-orange-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-orange-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:fathimafidha178@gmail.com"
              className="text-gray-500 hover:text-orange-500 transition"
            >
              Email
            </a>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Fathima Fidha. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-orange-500 text-sm hover:text-orange-400 transition"
          >
            Back to Top ↑
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;