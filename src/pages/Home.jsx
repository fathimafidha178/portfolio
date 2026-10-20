import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Download,
  Code2,
  Server,
} from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-orange-500"
            >
              Hello, I'm
            </motion.p>

   {/* Name - Bottom to Top Pop Animation */}
<motion.h1
  initial={{
    opacity: 0,
    y: 60,
    scale: 0.9,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.7,
    delay: 0.2,
    type: "spring",
    stiffness: 160,
    damping: 10,
  }}
  className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
>
  Fathima{" "}
  <span className="text-orange-500">Fidha</span>
</motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-xl font-medium text-gray-300 sm:text-2xl"
            >
              Full Stack MERN Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 lg:mx-0"
            >
              I build modern, responsive and user-focused web applications
              using React.js, Node.js, Express.js and MongoDB. I enjoy turning
              ideas into clean, functional and scalable digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              {/* View Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20"
              >
                View My Work

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>

            {/* ================= SOCIAL LINKS ================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 flex justify-center gap-4 lg:justify-start"
            >
              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-800 text-sm font-bold text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
              >
                GH
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-800 text-sm font-bold text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
              >
                in
              </a>

              {/* Email */}
              <a
                href="mailto:fathimafidha178@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-800 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PROFILE CARD ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">

              {/* Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-orange-500/10 blur-2xl" />

              {/* Card */}
              <div className="relative rounded-3xl border border-gray-800 bg-gray-950/90 p-8 shadow-2xl backdrop-blur-sm">

                {/* Profile Initial */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10"
                >
                  <span className="text-4xl font-bold text-orange-500">
                    FF
                  </span>
                </motion.div>

                {/* Profile Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold">
                    Fathima Fidha
                  </h3>

                  <p className="mt-2 text-sm text-orange-500">
                    Full Stack MERN Developer
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    Passionate about creating modern web applications
                    with clean interfaces and reliable backend systems.
                  </p>
                </div>

                {/* ================= SKILLS ================= */}
                <div className="mt-8 grid grid-cols-2 gap-4">

                  {/* Frontend */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-gray-800 bg-black/50 p-4 text-center transition-all duration-300 hover:border-orange-500/40"
                  >
                    <Code2
                      size={22}
                      className="mx-auto mb-2 text-orange-500"
                    />

                    <p className="text-sm font-medium text-gray-200">
                      Frontend
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      React.js
                    </p>
                  </motion.div>

                  {/* Backend */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-gray-800 bg-black/50 p-4 text-center transition-all duration-300 hover:border-orange-500/40"
                  >
                    <Server
                      size={22}
                      className="mx-auto mb-2 text-orange-500"
                    />

                    <p className="text-sm font-medium text-gray-200">
                      Backend
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Node.js
                    </p>
                  </motion.div>

                </div>

                {/* Availability */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  Available for opportunities
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-gray-500 sm:flex"
      >
        <span>Scroll to explore</span>

        <div className="h-8 w-px bg-gray-700" />
      </motion.div>
    </section>
  );
}

export default Home;