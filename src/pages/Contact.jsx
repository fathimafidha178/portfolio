import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

    window.location.href =
      `mailto:fathimafidha178@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Let's Work
            <span className="text-orange-500"> Together</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Have a project, opportunity or idea? Feel free to get in touch.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Details */}
          <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-7">

              <div>
                <p className="text-orange-500 font-semibold mb-2">
                  Email
                </p>

                <a
                  href="mailto:fathimafidha178@gmail.com"
                  className="text-gray-300 hover:text-orange-500 transition"
                >
                  fathimafidha178@gmail.com
                </a>
              </div>

              <div>
                <p className="text-orange-500 font-semibold mb-2">
                  Phone
                </p>

                <a
                  href="tel:+918714151758"
                  className="text-gray-300 hover:text-orange-500 transition"
                >
                  +91 8714151758
                </a>
              </div>

              <div>
                <p className="text-orange-500 font-semibold mb-2">
                  Location
                </p>

                <p className="text-gray-300">
                  Kerala, India
                </p>
              </div>

            </div>

            <div className="border-t border-gray-800 my-8"></div>

            <h4 className="font-semibold mb-4">
              Connect With Me
            </h4>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-gray-700 rounded-lg text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-gray-700 rounded-lg text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Form */}
          <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>

              <div className="mb-5">

                <label className="block text-gray-300 font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-orange-500 transition"
                />

              </div>

              <div className="mb-5">

                <label className="block text-gray-300 font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-orange-500 transition"
                />

              </div>

              <div className="mb-6">

                <label className="block text-gray-300 font-medium mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-orange-500 transition resize-none"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-black py-3.5 rounded-xl font-bold hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;