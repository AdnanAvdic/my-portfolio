import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <div className="relative">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="hire-bg.svg"
            alt="footer image"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-16 right-0 left-0 ml-auto mr-auto w-[210px] md:top-[120px]  ">
          <div className=" flex flex-wrap text-white ">
            <h3>Have any project in mind?</h3>
          </div>
        </div>

        <div className="absolute top-28 right-0 left-0 ml-auto mr-auto w-[150px] md:top-44 active:scale-95 ease-in-out transform transition ">
          <a className="cursor-pointer">
            <div className=" flex flex-wrap bg-white justify-center py-3 px-6 rounded-full">
              <button>Hire me</button>
            </div>
          </a>
        </div>
      </div>

      <h4 className=" text-white text-xs text-center py-10">
        Copyright All Rights Reserved
      </h4>
    </footer>
  );
};

export default Footer;
