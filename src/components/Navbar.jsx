import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../constants/data";

const NavItems = () => {
  return (
    <>
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {navLinks.map(({ id, href, name }) => (
          <li
            key={id}
            className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
          >
            <a
              href={href}
              className="text-lg md:text-base hover:text-white transition-colors"
              onClick={() => {}}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center py-5">
            <a
              href="/"
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            >
              Anzhelika
            </a>

            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Open Menu"
            >
              {isOpen ? (
                <FaTimes color="white" size={30} />
              ) : (
                <FaAlignJustify color="white" size={30} />
              )}
            </button>

            <nav className="sm:flex hidden">
              <NavItems />
            </nav>
          </div>
        </div>

        <div
          className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
