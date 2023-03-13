import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";


const Header = () => {

  return (
    <div
      className="flex flex-wrap justify-center sm:justify-end font-bold content-center p-1 spaxe-x-1 sm:space-x-3 border-solid border-b-[.08px] 
    border-b-gray-800/10 bg-blue-50 text-[.5rem] md:text-base 2xl:text-2xl z-10 sticky top-0"
    >
      <Link
        className="hover:border-slate-400 hover:border-[.6px] rounded-lg flex justify-center align-center p-2 hover:bg-blue-200/50"
        href="#about"
      >
        About Me
      </Link>
      <Link
        className="hover:border-slate-400 hover:border-[.6px] rounded-lg flex justify-center align-center p-2 hover:bg-blue-200/50"
        href="#projects"
      >
        Projects
      </Link>
      <Link
        className="hover:border-slate-400 hover:border-[.6px] rounded-lg flex justify-center align-center p-2 hover:bg-blue-200/50"
        href="#experience"
      >
        Experience
      </Link>

      <Link
        className="hover:border-slate-400 hover:border-[.6px] rounded-lg flex justify-center align-center p-2 hover:bg-blue-200/50"
        href="#contact"
      >
        Contact
      </Link>
      {/* <div>
          <button className="pr-4 p-1">   
            <MoonIcon className="h-4 w-4 2xl:h-8 2xl:w-8 flex content-end hover:bg-blue-200/50 rounded-lg" />
          </button>
      </div> */}
    </div>
  );
};
export default Header;
