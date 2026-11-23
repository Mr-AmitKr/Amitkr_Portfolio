
import React, { useState } from "react";
import Button from "../../Button/Button";
import { FiArrowRight, FiLinkedin } from "react-icons/fi";
import { FaInstagram, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields before submitting.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus(error?.text || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sectionLabel =
    "text-xs sm:text-sm md:text-base font-extralight tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-zinc-400";

  const entryTitle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-300 leading-tight mt-5 sm:mt-6";

  const inputStyle =
    "w-full min-w-0 h-12 mt-2 px-3 sm:px-4 border border-zinc-600 rounded-md bg-zinc-800 text-sm sm:text-base text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/amit-kumar-0b9a53410/",
      icon: <FiLinkedin />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/__.i_am_amit.__?knvt=Z2xkY2R6a20xZGR3",
      icon: <FaInstagram />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Mr-AmitKr",
      icon: <FaGithub />,
    },
  ];

  return (
    <section id="contact" className="w-full overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="py-16 sm:py-20 md:py-24 lg:py-28">

          <p className={sectionLabel}>03 - CONTACT</p>

          <h1 className={entryTitle}>
            Let's Work Together!
            <br className="hidden sm:block" />
            Reach Out and Let's
            <br className="hidden sm:block" />
            Make things clearer.
          </h1>

        </div>
      </div>

      {/* Main Contact Section */}
      <div className="
        max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-12
        grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr]
        gap-10 lg:gap-16
        border-b border-zinc-700
        pb-12 sm:pb-16
      ">

        {/* Contact Form */}
        <div className="min-w-0 text-zinc-300">

          <form onSubmit={handleSubmit} noValidate>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

              {/* Name */}
              <div className="min-w-0">
                <label htmlFor="Name" className={sectionLabel}>
                  NAME
                </label>

                <input
                  type="text"
                  id="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your Name"
                  autoComplete="name"
                  className={inputStyle}
                />
              </div>

              {/* Email */}
              <div className="min-w-0">
                <label htmlFor="Email" className={sectionLabel}>
                  EMAIL
                </label>

                <input
                  type="email"
                  id="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Your Email"
                  autoComplete="email"
                  className={inputStyle}
                />
              </div>

            </div>

            {/* Message */}
            <div className="mt-6 sm:mt-8">

              <label htmlFor="Message" className={sectionLabel}>
                MESSAGE
              </label>

              <textarea
                id="Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="Your Message"
                className={`${inputStyle} h-32 resize-y py-3`}
              />

            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              icon={<FiArrowRight />}
              disabled={loading}
              className="
                w-full sm:w-auto
                text-[13px] sm:text-[14px]
                font-medium font-sans uppercase
                tracking-wider whitespace-nowrap
                mt-6 flex items-center justify-center
              "
            >
              {loading ? "SENDING..." : "SEND ME"}
            </Button>

            {/* Status */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm mt-4 ${
                  status.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            <p className="
              text-xs sm:text-sm
              font-extralight
              tracking-[1px] sm:tracking-[2px]
              text-zinc-400
              mt-5
              leading-6
            ">
              No forms into the void — this lands directly in my inbox.
            </p>

          </form>
        </div>

        {/* Contact Information */}
        <div className="
          min-w-0
          flex flex-col
          gap-7 sm:gap-8
          lg:border-l lg:border-zinc-700
          lg:pl-10
        ">

          {/* Email */}
          <div>
            <p className={sectionLabel}>EMAIL</p>

            <a
              href="mailto:im.amitkr001@gmail.com"
              className="
                block mt-2
                text-sm sm:text-base
                font-semibold tracking-wide
                text-zinc-300
                break-all
                hover:text-white transition-colors
              "
            >
              im.amitkr001@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className={sectionLabel}>PHONE</p>

            <a
              href="tel:+917763932643"
              className="
                block mt-2
                text-sm sm:text-base
                font-semibold tracking-wide
                text-zinc-300
                hover:text-white transition-colors
              "
            >
              +91 7763932643
            </a>
          </div>

          {/* Location */}
          <div>
            <p className={sectionLabel}>LOCATION</p>

            <p className="
              mt-2
              text-sm sm:text-base
              font-semibold tracking-wide
              text-zinc-300
            ">
              INDIA, JAMSHEDPUR
            </p>
          </div>

          {/* Social Links */}
          <div>
            <p className={sectionLabel}>FOLLOW ME</p>

            <div className="flex gap-3 mt-3">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    w-10 h-10 sm:w-11 sm:h-11
                    shrink-0
                    rounded-full
                    border border-zinc-500
                    bg-zinc-700
                    flex items-center justify-center
                    text-zinc-300 text-xl
                    hover:bg-zinc-300
                    hover:text-zinc-800
                    hover:border-zinc-300
                    transition-all duration-300
                  "
                >
                  {social.icon}
                </a>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="
        max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-12
        py-8 sm:py-10
        flex flex-col-reverse
        sm:flex-row
        items-start sm:items-center
        justify-between
        gap-5 sm:gap-8
      ">

        <p className="text-xs sm:text-sm text-zinc-400 leading-6">
          © 2026 AmitKr. All rights reserved.
        </p>

        <p className="text-xs sm:text-sm text-zinc-400">
          Designed & built with passion.
        </p>

      </footer>

    </section>
  );
};

export default ContactMe;
