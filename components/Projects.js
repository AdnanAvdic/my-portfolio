import Image from "next/image";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section className="py-12 lg:py-24">
      <div
        className=" mx-auto space-y-8
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
            My projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 ">
          <div
            className=" relative w-96 h-72 hover:scale-105 ease-in-out transition transform 
          sm:mx-auto 
          lg:ml-auto lg:mr-4 "
          >
            <a className=" cursor-pointer" href="http://www.carget.net/">
              <Image
                src="/carget-lp.png"
                alt="carget landing page"
                fill
                className=" object-cover"
              />
            </a>
          </div>

          <div
            className=" relative w-96 h-72 hover:scale-105 ease-in-out transition transform sm:mx-auto 
          lg:mr-auto lg:ml-4"
          >
            <a
              className=" cursor-pointer"
              href="http://www.carget.net/article/1"
            >
              <Image
                src="/carget-home.png"
                alt="carget home page"
                fill
                className=" object-cover"
              />
            </a>
          </div>

          <div
            className=" relative w-96 h-72 hover:scale-105 ease-in-out transition transform 
          sm:mx-auto lg:ml-auto lg:mr-4 lg:mt-8"
          >
            <a className=" cursor-pointer" href="https://ab-clone.vercel.app/">
              <Image
                src="/airbnb-home.png"
                alt="airbnb home page"
                fill
                className=" object-cover"
              />
            </a>
          </div>

          <div
            className=" relative w-96 h-72 hover:scale-105 ease-in-out transition transform 
          sm:mx-auto lg:ml-4 lg:mt-8"
          >
            <a
              className=" cursor-pointer"
              href="https://ab-clone.vercel.app/search?location=London&startDate=2023-01-11T23%3A00%3A00.000Z&endDate=2023-01-17T23%3A00%3A00.000Z&numberOfGuests=5
"
            >
              <Image
                src="/airbnb-search.png"
                alt="airbnb search page"
                fill
                className=" object-cover"
              />
            </a>
          </div>

          <div
            className="relative bg-[#101126] hover:scale-105 ease-in-out transition transform 
          sm:mx-auto lg:mr-4 lg:mt-8"
          >
            <a href="https://github.com/AdnanAvdic?tab=repositories">
              <BsGithub className=" w-96 h-72 p-24 fill-white " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
