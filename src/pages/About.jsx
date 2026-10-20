
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-28 bg-zinc-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-orange-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Building Digital
            <span className="text-orange-500"> Experiences</span>
          </h2>

          <p className="text-gray-400 mt-5 text-base md:text-lg leading-8">
            A passionate developer focused on building clean, responsive and
            practical web applications using modern technologies.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left - Introduction */}
          <div className="animate-[fadeIn_0.8s_ease-out]">

            <div className="mb-7">

              <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Who I Am
              </p>

              <h3 className="text-3xl md:text-4xl font-bold">
                I'm Fathima Fidha
              </h3>

              <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full"></div>

            </div>

            <div className="space-y-5">

              <p className="text-gray-300 text-lg leading-8">
                I am <span className="text-white font-semibold">Fathima Fidha</span>,
                a Full Stack MERN Developer with a Bachelor of Computer
                Applications (BCA). I am passionate about developing modern
                web applications that are responsive, intuitive and focused
                on delivering a smooth user experience.
              </p>

              <p className="text-gray-400 leading-8">
                I work across both frontend and backend development using
                technologies such as
                <span className="text-orange-400">
                  {" "}React.js, JavaScript, Node.js, Express.js, MongoDB
                </span>
                {" "}and MySQL. I enjoy building user interfaces, developing
                REST APIs, integrating databases and turning ideas into
                functional applications.
              </p>

              <p className="text-gray-400 leading-8">
                I am continuously learning and improving my technical skills
                through hands-on projects and practical development
                experience. I am looking forward to contributing to
                professional development teams and growing as a software
                developer.
              </p>

            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-9">

              <div
                className="
                  group
                  bg-black
                  border border-gray-800
                  rounded-xl
                  p-5
                  hover:border-orange-500/70
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">
                      FS
                    </span>
                  </div>

                  <div>
                    <p className="text-white font-bold">
                      MERN Stack
                    </p>

                    <p className="text-gray-500 text-sm">
                      Full Stack Development
                    </p>
                  </div>

                </div>
              </div>

              <div
                className="
                  group
                  bg-black
                  border border-gray-800
                  rounded-xl
                  p-5
                  hover:border-orange-500/70
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">
                      BCA
                    </span>
                  </div>

                  <div>
                    <p className="text-white font-bold">
                      BCA Graduate
                    </p>

                    <p className="text-gray-500 text-sm">
                      Computer Applications
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* Right - Profile Card */}
          <div className="relative">

            <div
              className="
                relative
                bg-black
                border border-gray-800
                rounded-2xl
                p-7 md:p-9
                shadow-2xl
                hover:border-orange-500/50
                transition-all duration-500
              "
            >

              {/* Top Accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

              {/* Profile Header */}
              <div className="flex items-center gap-5 pb-7 border-b border-gray-800">

                <div
                  className="
                    w-16 h-16
                    shrink-0
                    rounded-2xl
                    bg-orange-500
                    text-black
                    flex
                    items-center
                    justify-center
                    font-black
                    text-xl
                    shadow-lg
                    shadow-orange-500/20
                  "
                >
                  FF
                </div>

                <div>

                  <h4 className="text-xl md:text-2xl font-bold">
                    Fathima Fidha
                  </h4>

                  <p className="text-orange-500 text-sm mt-1 font-medium">
                    Full Stack MERN Developer
                  </p>

                </div>

              </div>

              {/* Details */}
              <div className="py-7 space-y-6">

                {/* Name */}
                <div className="flex items-start justify-between gap-6">

                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                      Name
                    </p>

                    <p className="text-gray-200 font-medium">
                      Fathima Fidha
                    </p>
                  </div>

                  <span className="text-orange-500 text-lg">
                    ✦
                  </span>

                </div>

                {/* Role */}
                <div className="flex items-start justify-between gap-6">

                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                      Role
                    </p>

                    <p className="text-gray-200 font-medium">
                      Full Stack MERN Developer
                    </p>
                  </div>

                  <span className="text-orange-500 text-lg">
                    ✦
                  </span>

                </div>

                {/* Education */}
                <div className="flex items-start justify-between gap-6">

                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                      Education
                    </p>

                    <p className="text-gray-200 font-medium">
                      Bachelor of Computer Applications
                    </p>
                  </div>

                  <span className="text-orange-500 text-lg">
                    ✦
                  </span>

                </div>

                {/* Location */}
                <div className="flex items-start justify-between gap-6">

                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                      Location
                    </p>

                    <p className="text-gray-200 font-medium">
                      Kerala, India
                    </p>
                  </div>

                  <span className="text-orange-500 text-lg">
                    ✦
                  </span>

                </div>

                {/* Email */}
                <div className="flex items-start justify-between gap-6">

                  <div className="min-w-0">

                    <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                      Email
                    </p>

                    <a
                      href="mailto:fathimafidha178@gmail.com"
                      className="
                        text-orange-500
                        font-medium
                        break-all
                        hover:text-orange-400
                        transition
                      "
                    >
                      fathimafidha178@gmail.com
                    </a>

                  </div>

                  <span className="text-orange-500 text-lg">
                    ✦
                  </span>

                </div>

              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-gray-800">

                <a
                  href="#contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    w-full
                    bg-orange-500
                    text-black
                    px-6
                    py-3.5
                    rounded-xl
                    font-bold
                    hover:bg-orange-400
                    hover:shadow-xl
                    hover:shadow-orange-500/20
                    transition-all duration-300
                  "
                >
                  Let's Connect

                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Small bottom decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-orange-500/50"></div>

    </section>
  );
};

export default About;
