import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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
    <>
      <header
        className="sticky flex justify-between items-center mx-auto py-6 
      max-w-md 
      sm:max-w-xl
      md:max-w-2xl
      lg:max-w-[1000px]
      xl:max-w-[1100px]"
      >
        <div>
          <a className="font-regular text-white">
            <span className=" text-[#FF5A5F] text-base">Developed</span> by
            Adnan
          </a>
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
        <div className="hidden text-white md:flex gap-8 text-sm">
          <a>Home</a>
          <a>About</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      </header>

      <div className={menuState}>
        <div
          className="flex flex-col text-center w-full bg-[#FF5A5F] space-y-2 text-white font-regular text-base
        md:hidden"
        >
          <a className="w-full cursor-pointer pt-2">Home</a>
          <a className="w-full cursor-pointer">About</a>
          <a className="w-full cursor-pointer">Services</a>
          <a className="w-full cursor-pointer pb-2">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
