import Image from "next/image";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { SiWebflow } from "react-icons/si";

const Services = () => {
  return (
    <section className="bg-[#101126] py-12 lg:py-24">
      <div
        className="mx-auto space-y-8
        max-w-sm
        sm:max-w-xl
        md:max-w-2xl
        lg:max-w-[1000px]
        xl:max-w-[1100px]"
      >
        <div className="flex flex-wrap justify-center">
          <h2
            className=" text-white text-2xl border-b-[2px] border-[#FF5A5F]
            lg:text-4xl"
          >
            Services
          </h2>
        </div>

        <div>
          <p className="text-white text-center">
            As a web developer, I offer a range of services to help businesses
            and organizations achieve their online goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-between">
          <div className=" relative w-96 h-72 sm:mx-auto lg:ml-auto lg:mr-4">
            <Image
              src="/web-design.jpg"
              alt="web design image"
              fill
              className=" object-contain"
            />
            <div
              className=" bg-gradient-to-r from-[#51E0FF] to-[#0029FF]
            opacity-70 w-96 h-64 z-50 absolute top-4 left-0 "
            ></div>

            <div className=" absolute top-16 left-9 text-white z-50 space-y-6 ">
              <ComputerDesktopIcon className=" w-16 h-16" />
              <h3 className="text-lg">Web Development</h3>
              <p className="text-sm max-w-[300px]">
                I am a web developer who specializes in JavaScript, React and
                Next.js
              </p>
            </div>
          </div>

          <div className=" relative w-96 h-72 sm:mx-auto lg:mr-auto lg:ml-4">
            <Image
              src="/web-design.jpg"
              alt="web design image"
              fill
              className=" object-contain"
            />

            <div
              className=" bg-gradient-to-r from-orange-500 to-orange-700
            opacity-70 w-96 h-64 z-50 absolute top-4 left-0  "
            ></div>

            <div className=" absolute top-16 left-9 text-white z-50 space-y-6 ">
              <CodeBracketSquareIcon className="w-16 h-16" />
              <h3 className="text-lg">Web Design</h3>
              <p className="text-sm max-w-[300px]">
                Tools like Figma and Tailwind CSS help me to make stunning and
                functional websites
              </p>
            </div>
          </div>

          <div className=" relative w-96 h-72 sm:mx-auto lg:ml-auto lg:mr-4">
            <Image
              src="/web-design.jpg"
              alt="web design image"
              fill
              className=" object-contain"
            />

            <div
              className=" bg-gradient-to-r from-[#C751FF] to-[#CC00FF]
            opacity-70 w-96 h-64 z-50 absolute top-4 left-0 "
            ></div>

            <div className=" absolute top-16 left-9 text-white z-50 space-y-6 ">
              <SiWebflow className="w-14 h-14" />
              <h3 className="text-lg">Webflow Development</h3>
              <p className="text-sm max-w-[300px]">
                Strong fundation in creating custom websites using webflow
                platform
              </p>
            </div>
          </div>

          <div className=" relative w-96 h-72 sm:mx-auto lg:mr-auto lg:ml-4">
            <Image
              src="/web-design.jpg"
              alt="web design image"
              fill
              className=" object-contain"
            />

            <div
              className=" bg-gradient-to-r from-green-500 to-[#00FF29] 
            opacity-70 w-96 h-64 z-50 absolute top-4 left-0 "
            ></div>
            <div className=" absolute top-16 left-9 text-white z-50 space-y-6 ">
              <DevicePhoneMobileIcon className="w-16 h-16" />
              <h3 className="text-lg">App Design</h3>
              <p className="text-sm max-w-[300px]">
                Creating user-friendly mobile experiences with tools like Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
