import React from "react";

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "01",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "React Vite",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend Development",
      icon: "02",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "API Integration",
      ],
    },
    {
      title: "Database",
      icon: "03",
      skills: [
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "04",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold mb-3">
            MY SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Technical
            <span className="text-orange-500"> Expertise</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to develop modern web applications.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-7">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="group bg-zinc-950 border border-gray-800 rounded-2xl p-7 hover:border-orange-500/60 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-7">

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

                <span className="text-orange-500 font-black text-xl">
                  {category.icon}
                </span>

              </div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-gray-300 text-sm hover:border-orange-500 hover:text-orange-400 hover:-translate-y-1 transition-all duration-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;