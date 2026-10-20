import React from "react";

const Experiences = () => {

  return (
    <section id="experience" className="py-24 bg-black text-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold mb-3">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Professional
            <span className="text-orange-500"> Journey</span>
          </h2>

        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2"></div>

          <div className="relative grid md:grid-cols-2 gap-10">

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-black md:-translate-x-1/2 z-10"></div>

            <div className="md:pr-12 pl-12 md:pl-0">

              <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-7 hover:border-orange-500/60 transition">

                <span className="inline-block text-orange-500 text-sm font-semibold mb-3">
                  May 2025 – Sep 26
                </span>

                <h3 className="text-2xl font-bold">
                  MERN Stack Developer Intern
                </h3>

                <p className="text-orange-500 font-semibold mt-2">
                  RISS Technology, Calicut
                </p>

                <p className="text-gray-400 leading-7 mt-6">
                  Working on responsive and user-friendly web applications
                  using modern full-stack development technologies.
                </p>

              </div>

            </div>

            <div className="md:pl-12 pl-12">

              <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-7 hover:border-orange-500/60 transition">

                <h4 className="text-lg font-semibold mb-5">
                  Key Responsibilities
                </h4>

                <ul className="space-y-4 text-gray-400">

                  <li className="flex gap-3">
                    <span className="text-orange-500">▸</span>
                    Developed responsive interfaces using React.js.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-orange-500">▸</span>
                    Built REST APIs using Node.js and Express.js.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-orange-500">▸</span>
                    Worked with MongoDB for application data management.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-orange-500">▸</span>
                    Used Git and GitHub for version control.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-orange-500">▸</span>
                    Tested APIs using Postman and debugged application issues.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experiences;