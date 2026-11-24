import { useState } from "react";
import "./Navbar.css";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 
       w-[calc(100%-2rem)] max-w-6xl px-2 sm:px-4 lg:px-6 py-1 
       rounded-3xl border border-white/10 flex items-center justify-between"
      style={{
        background: `
          linear-gradient(
            180deg,
            rgba(215, 215, 255, 0.1),
            rgba(215, 215, 255, 0.1)
          )
        `,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Logo */}
      <div className="shrink-0 z-20">
        <a href="/"><img
          className="h-10 w-auto object-contain"
          src="/src/image/AmitKr.png"
          alt=""
        /></a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:block z-20">
        <ul
          className="flex gap-18 px-6 py-3
          "
          style={{
            fontFamily:"sans-serif",
            fontWeight: 500,
            fontSize: "12.5px",
          
          }}
        >
          <li>
             <a href="#about" className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
              About Me
            </a>
          </li>
          <li>
           
            <a href="#resume" className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
             Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu toggle */}
      <div className="text-white text-2xl flex items-center md:hidden">
        <button
          type="button"
          className="md:hidden text-white text-3xl relative z-1000"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX /> : <FiAlignJustify />}
        </button>
      </div>

      {/* Mobile dropdown — now fixed to the real viewport, outside the transformed nav's flow issues */}
      <div
         className={`
    absolute top-full -left-4 -mt-20 h-screen w-screen
    border border-white/10 p-4 
    transition-transform duration-500 ease-out
    bg-black/60
    ${menuOpen ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"}
  `}
  style={{
    background: "rgba(15,15, 15, 0.8)",
    backdropFilter: "blur(80px)",
    WebkitBackdropFilter: "blur(80px)",
  }}
>
        <div className="relative z-10 mt-24 text-[18px] font-bold font-sans font-stretch-expanded uppercase
            tracking-wider">
          <div
            className={`
    flex flex-col items-center py-20
    transition-all duration-700 ease-out
    ${
      menuOpen
        ? "opacity-100 blur-8 translate-y-0"
        : "opacity-50 blur-md translate-y-12"
    }
  `}
            style={{
              fontFamily:"wingman",
              fontWeight:200,
              gap:"50px",
            }}
          >
            <li>
             <a href="#about" onClick={closeMenu} className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
                About Me
              </a>
            </li>
            <li>
               <a href="#resume" onClick={closeMenu} className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
                Resume
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu} className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="text-gray-100 hover:text-gray-300 tracking-widest hover-underline">
                Contact
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;