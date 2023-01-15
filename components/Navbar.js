import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuIconShown, setMenuIconShown] = useState(true);
  const [menuState, setMenuState] = useState("hidden");

  //opens and closes menu in navbar
  const switchMenuIcon = () => {
    setMenuIconShown(!menuIconShown);

    if (!menuIconShown) {
      setMenuState("hidden");
    } else {
      setMenuState("flex");
    }
  };

  return (
    <div className="fixed w-full bg-[#0a0b1e] z-50">
      <nav
        className="flex items-center mx-auto py-6  w-full 
      max-w-sm
      sm:max-w-xl
      md:max-w-2xl
      lg:max-w-[1000px]
      xl:max-w-[1100px]"
      >
        <div>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="font-regular text-white cursor-pointer"
          >
            <span className=" text-[#FF5A5F] text-base">Developed</span> by
            Adnan
          </Link>
        </div>

        {menuIconShown ? (
          <div className="md:hidden">
            <Bars3Icon
              className="w-6 h-6 fill-[#FF5A5F]"
              onClick={() => switchMenuIcon()}
            />
          </div>
        ) : (
          <div className="md:hidden">
            <XMarkIcon
              className="w-6 h-6 fill-[#FF5A5F]"
              onClick={() => switchMenuIcon()}
            />
          </div>
        )}
        <div className="hidden text-white md:flex gap-8 text-sm ml-auto">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className=" cursor-pointer hover:text-[#FF5A5F]"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className=" cursor-pointer hover:text-[#FF5A5F]"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className=" cursor-pointer hover:text-[#FF5A5F]"
          >
            Projects
          </Link>
          <Link
            className=" cursor-pointer hover:text-[#FF5A5F]"
            to="services"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className=" cursor-pointer hover:text-[#FF5A5F]"
          >
            Contact
          </Link>
        </div>
      </nav>

      <div className={menuState}>
        <div
          className="flex flex-col text-center w-full bg-[#FF5A5F] space-y-2 text-white font-regular text-base
        md:hidden"
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="w-full cursor-pointer pt-2"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="w-full cursor-pointer"
          >
            About
          </Link>
          <Link
            className="w-full cursor-pointer"
            to="projects"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="w-full cursor-pointer"
            to="services"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="w-full cursor-pointer pb-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
