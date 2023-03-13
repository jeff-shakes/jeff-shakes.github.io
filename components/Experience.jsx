import { Tab } from "@headlessui/react";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Experience = () => {

  let [categories] = useState({
    "General Assembly" : [
      {
        id: 1,
        position: "Data Scientist Fellow",
        employer: "General Assembly",
        time: "Nov 2022 - Mar 2023",
        description: "Over 500 hours of instruction and work on real-world data science problems. Quickly learned and immediately applied new technologies and methodologies.",
        keywords: "Data Engineering, Machine Learning, Prediction and Classification Modeling, Time Series, Natural Language Processing", 
      },
    ],
    "Mursion" : [
      {
        id: 2,
        title: "Mursion",
        position: "Simulation Communication Coach",
        employer: "Mursion",
        time: "Dec 2020 - Present",
        description: "Coached empathy, emotional intelligence, and healthy communication through virtual reality with clients such as Google, McKinsey, Coca-Cola, and Starbucks.",
        keywords: "", 
      },
    ],
    "Solis Films" : [
      {
      id: 3,
      title: "Solis Films",
      position: "SCRUM Master / Head of Broadcast",
      employer: "Solis Films",
      time: "Mar 2021 - Sept 2022",
      description: "Delivered complex and high-pressure live shows for companies such as NBC, Andreessen Horowitz, Walton Family Foundation, & UFC. Transitioned the company into an agile framework with cross-functionality between teams. Performed as SCRUM Master, boosting client satisfaction and client retention",
      keywords: "",
    },
    ],
  })
  return (
    <div className="md:h-screen w-5/6 md:w-2/6 flex flex-col justify-center md:justify-start m-auto sm:px-0">
      <h3 className="flex justify-center font-semibold text-2xl mt-14 md:text-5xl align-middle pb-5">
        Experience
      </h3>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-900 hover:bg-blue-200/50'
              )
            }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3 min-h-[200px]',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-extrabold leading-5">
                      {post.position}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li><span className='font-extrabold'>{post.employer}</span></li>
                      <li>&middot;</li>
                      <li><span className='font-bold text-black'>{post.time}</span></li>
                    </ul>
                    <p className='py-1'>{post.description}</p>
                    <p className='text-xs font-bold, text-blue-600 py-1'>{post.keywords}</p>
                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default Experience;
