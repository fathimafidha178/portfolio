import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-black flex items-center justify-center font-black text-lg shadow-lg shadow-orange-500/20">
              FF
            </div>

            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg">
                Fathima Fidha
              </h1>

              <p className="text-orange-500 text-xs">
                MERN Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 text-sm font-medium hover:text-orange-500 transition duration-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 rounded-lg bg-orange-500 text-black font-semibold text-sm hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-5">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleClick}
                  className="text-gray-300 hover:text-orange-500 hover:bg-zinc-900 px-4 py-3 rounded-lg transition duration-300"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center bg-orange-500 text-black font-semibold px-4 py-3 rounded-lg hover:bg-orange-400 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;