import React from "react";

const Education = () => {

  return (
    <section id="education" className="py-24 bg-zinc-950 text-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold mb-3">
            EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Academic
            <span className="text-orange-500"> Background</span>
          </h2>

        </div>

        <div className="relative">

          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-800"></div>

          <div className="space-y-10">

            <div className="relative pl-14">

              <div className="absolute left-2.5 top-7 w-5 h-5 bg-orange-500 rounded-full border-4 border-zinc-950"></div>

              <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500/60 transition">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div>

                    <span className="text-orange-500 text-sm font-semibold">
                      2022 – 2025
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold mt-3">
                      Bachelor of Computer Applications
                    </h3>

                    <p className="text-orange-500 font-semibold mt-2">
                      Noble Women's College, Manjeri
                    </p>

                    <p className="text-gray-500 mt-1">
                      University of Calicut
                    </p>

                  </div>

                  <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm">
                    BCA
                  </span>

                </div>

                <p className="text-gray-400 leading-7 mt-6">
                  Completed a Bachelor of Computer Applications with a strong
                  foundation in programming, web development, databases,
                  software development and computer applications.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {[
                    "Programming",
                    "Web Development",
                    "Database Management",
                    "Software Development",
                  ].map((item) => (

                    <span
                      key={item}
                      className="px-3 py-2 rounded-lg bg-zinc-950 border border-gray-800 text-gray-400 text-sm hover:border-orange-500 hover:text-orange-400 transition"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;