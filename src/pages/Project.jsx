import React from "react";

const Projects = () => {

  const projects = [
    {
      number: "01",
      title: "PG / Hostel Management System",
      description:
        "A full-stack management platform designed to manage rooms, tenants, bookings, staff, payments, notifications and hostel operations.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github: "#https://github.com/fathimafidha178/",
      demo: "#",
    },

    {
      number: "02",
      title: "Clinic Management System",
      description:
        "A responsive clinic management application for managing doctors, treatments, appointments and clinic-related information.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/fathimafidha178/",
      demo: "#",
    },

    {
      number: "03",
      title: "Emotion Tracker",
      description:
        "An emotion tracking application designed to detect and monitor facial emotions using computer vision and mobile technologies.",
      technologies: [
        "Django",
        "Python",
        "Flutter",
      ],
      github: "https://github.com/fathimafidha178/",
      demo: "#",
    },

    {
      number: "04",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with product management, seller functionality, customer interactions, cart and order management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/fathimafidha178/",
      demo: "#",
    },

    {
      number: "05",
      title: "Wedding Invitation",
      description:
        "A beautiful wedding invitation website featuring elegant invitation pages, couple details, and a memorable digital wedding experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
      ],
      github: "https://github.com/fathimafidha178/wedding",
      demo: "https://wedding-iota-three-85.vercel.app/",
    },

    {
      number: "07",
      title: "CodeShield AI - AI-Powered Source Code Security Analyzer",
      description:
        "A web-based security analysis tool that scans source code, detects vulnerabilities, identifies coding issues, and displays security analysis results.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "JavaScript",
      ],
      github: "https://github.com/fathimafidha178/",
      demo: "#",
    },

    {
      number: "08",
      title: "FiteBite",
      description:
        "A web-based healthy food ordering platform that allows users to explore food items, browse categories, place orders, and manage their food purchases through a user-friendly interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
      ],
      github: "https://github.com/fathimafidha178/FiteBite",
      demo: "https://fitebite.onrender.com",
    },



  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold mb-3">
            MY PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Featured
            <span className="text-orange-500"> Work</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A selection of applications and projects built using modern
            development technologies.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group relative bg-black border border-gray-800 rounded-2xl p-8 overflow-hidden hover:border-orange-500/70 hover:-translate-y-2 transition-all duration-500"
            >

              {/* Glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition"></div>

              <div className="relative z-10">

                <div className="flex justify-between items-start mb-7">

                  <div className="w-14 h-14 rounded-xl bg-orange-500 text-black flex items-center justify-center font-black text-lg">
                    {project.number}
                  </div>

                  <span className="text-gray-700 group-hover:text-orange-500 transition text-3xl">
                    ↗
                  </span>

                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="text-xs px-3 py-2 rounded-full border border-gray-700 text-gray-400 group-hover:border-orange-500/40 group-hover:text-orange-400 transition"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-black transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;