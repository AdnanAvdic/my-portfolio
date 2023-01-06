import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section className=" bg-[#101126] py-12 lg:py-24">
      <div
        className="mx-auto space-y-8
        max-w-md
        sm:max-w-xl
        md:max-w-2xl
        lg:max-w-[1000px]
        xl:max-w-[1100px]"
      >
        <div className=" grid grid-cols-1 lg:grid-cols-2  items-center">
          <div
            className="relative mx-auto w-72 h-72 
            border-solid border-[3px] border-[#FF5A5F] rounded-full
            lg:w-[420px] lg:h-[420px]"
          >
            <Image
              src="/my-picture.jpg"
              className="object-cover rounded-full"
              fill
              alt="profile image"
              priority
            />
          </div>

          <div className=" flex flex-col text-white space-y-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="relative border-solid border-[1px] border-[#FF5A5F] rounded-full p-2 ">
                <FaGithub className="w-6 h-6" />
              </div>
              <div className="relative border-solid border-[1px] border-[#FF5A5F] rounded-full p-2 ">
                <FaLinkedin className="w-6 h-6" />
              </div>
              <div className="relative border-solid border-[1px] border-[#FF5A5F] rounded-full p-2 ">
                <IoLogoVercel className="w-6 h-6" />
              </div>
              <div className="relative border-solid border-[1px] border-[#FF5A5F] rounded-full p-2 ">
                <FaInstagram className="w-6 h-6" />
              </div>
            </div>

            <h1
              className="text-2xl font-semibold
            lg:text-4xl "
            >
              I'm <span className="text-[#FF5A5F] ">&lt; Adnan /&gt;</span>
            </h1>

            <p className="">
              As a web developer, I have a passion for building beautiful and
              functional websites.
            </p>

            <div className="flex gap-4 text-sm font-medium justify-start items-center">
              <button
                className="bg-[#101126] py-3 px-6 text-[#FF5A5F] 
            border-solid border-[1px] border-[#FF5A5F] rounded-full "
              >
                My projects
              </button>

              <button className=" bg-[#FF5A5F] py-3 px-8 rounded-full ">
                Work with me?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
