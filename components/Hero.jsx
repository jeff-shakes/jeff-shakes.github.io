import Image from "next/image";
import MainPhoto from "../public/assets/hero.png";
import Resume from "./Resume";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  return (
    <div className="flex p-2 2xl:pl-28 sm:p-10 m-2 sm:m-5 flex-col space-y-1 pb-10">
      <div className="flex flex-wrap">
        <h6 className="font-semibold pb-2 2xl:ml-[160px]">Hi, my name is</h6>
      </div>
      <div className="flex flex-col align items-center sm:items-start md:flex-row md:justify-between 2xl:justify-around">
        <div className="flex flex-col space-y-4 2xl:space-y-8">
          <h1 className="font-semibold text-blue-700 text-5xl 2xl:text-9xl sm:text-8xl">
            Jeff Alexander.
          </h1>
          <h1 className="font-semibold text-gray-400/80 text-4xl lg:pt-14 sm:text-6xl pb-2 sm:pb-0">
            TELLING STORIES THROUGH DATA
          </h1>
        </div>
        <div className="mr-5">
          <Image
            src={MainPhoto}
            alt="main profile photo of Jeff Alexander"
            className="rounded-lg border-gray-200 border-2 h-auto w-72 2xl:w-[500px] 2xl:h-[500px]"
          />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <p className="flex flex-wrap sm:w-[800px] 2xl:text-2xl font-semibold leading-8 2xl:leading-10">
          A passionate and creative Data Scientist. Adaptive and ever-learning,
          I use the newest technologies to synthesize stories from complex data
          to answer intricate problems.
        </p>
      </div>
      <div className="flex pt-3 xl:pt-16 justify-center sm:justify-start space-x-4 sm:space-x-2 2xl:space-x-8 2xl:pl-10">
        <div>
          <Resume />
        </div>
        <div className='flex space-x-1 2xl:space-x-3'>
          <SocialIcon
            url="https://github.com/jeff-shakes"
            fgColor="blue"
            bgColor="transparent"
            className="border-[1px] rounded-full border-blue-500 hover:bg-slate-500/5"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/jeff-alexander-data-scientist/"
            fgColor="blue"
            bgColor="transparent"
            className="border-[1px] rounded-full border-blue-500 hover:bg-slate-500/5"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
