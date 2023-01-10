import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div
        className=" mx-auto space-y-8
        max-w-md
        sm:max-w-xl
        md:max-w-2xl
        lg:max-w-[1000px]
        xl:max-w-[1100px]"
      >
        <div className="flex flex-col lg:flex-row  lg:gap-32  items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap">
              <h2
                className=" text-white text-2xl border-b-[2px] border-[#FF5A5F]
            lg:text-4xl"
              >
                About me
              </h2>
            </div>

            <div className=" text-white">
              <p>
                <span className="text-[#FF5A5F]"></span>
                Hi, my name is Adnan Avdic and I am a self-taught web developer.
                I am 24 years old and have always had a passion for technology
                and building things from scratch
              </p>

              <p className="pt-2">
                I have spent countless hours learning and practicing my skills,
                and I am constantly amazed by the endless possibilities of the
                web
                <span className="text-[#FF5A5F]"></span>
              </p>
            </div>

            <div className=" flex gap-4 text-white text-sm font-medium justify-start items-center">
              <button className="bg-[#FF5A5F] py-3 px-6 rounded-full active:scale-95 transition transform">
                Hire me
              </button>
              <button
                className="bg-[#101126] py-3 px-8 text-[#FF5A5F] 
            border-solid border-[1px] border-[#FF5A5F] rounded-full
            active:scale-95 transition transform"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="pt-8">
            <div className=" relative w-[300px] h-[400px] lg:w-[339px] lg:h-[444px] mx-auto">
              <Image
                src="/Image.svg"
                alt="my image"
                fill
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
