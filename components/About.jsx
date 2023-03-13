import Image from "next/image";
import profilePic from "../public/assets/me.jpeg";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const skillNames=["Python", "Pandas", "Seaborn", "Sktime", "AWS", "Pyspark", "Keras", "NLP Processing", "Numpy", "Matplotlib", "Sklearn", "Statsmodels", "Databricks", "Tensorflow", "Streamlit", "Neural Networks"]

function About() {
  return (
    <div className="flex flex-col max-w-7xl px-10 justify-evenly m-auto h-screen">
      <h3 className="flex justify-center font-semibold text-xl md:text-3xl mt-6 md:mt-4 align-middle">
        About Me
      </h3>
      <div className="flex justify-between space-x-4 md:p-4">
        <Image
          src={profilePic}
          alt="Profile 2"
          className="invisible md:visible rounded-full object-fill h-1 w-1 md:w-64 md:h-64 xl:w-96 xl:h-96"
        />
        <div>
          <div className="flex flex-wrap text-gray-700 text-sm sm:text-base xl:text-lg">
            Using the expertise gained from my diverse background - an Analytical
            Chemist, Communications Coach, and SCRUM Master and now Data
            Scientist - I assist organizations in utilizing data to craft
            compelling narratives that aid in making informed decisions. Here
            are a few technologies I have been working with recently:
          </div>
          <div className="grid grid-cols-2 p-[2.4rem] border-transparent rounded-lg space-y-1">
              {skillNames.map((skill, index) => (
              <div className=" flex space-x-2 items-center" key={index}>
                <div >
                  <CheckCircleIcon className='text-blue-700 w-5 h-5' />
                </div>
                <div className='font-semibold p-1 text-xs sm:text-base xl:text-xl'>
                  {skill}
                </div>
            </div>
  ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
