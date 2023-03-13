import { Tab } from "@headlessui/react";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Education = () => {
  let [categories] = useState({
    "Data Science Immersive" : [
      {
      id : 1,
      school : "General Assembly",
      GPA : "4.0 GPA",
      description : "60-80 hrs/week of study, course work, and projects. Incorporated the newest Data Science technologies in real-world problems."
      },
    ],
      "Bachelor of Science in Chemistry" : [
      {
      id : 2,
      school : "University of North Carolina at Chapel Hill",
      GPA : "3.3 GPA",
      description : "Conducted undergraduate research culminating in publication. Won the honored 'Physical Chemistry Final' award which is the award for highest grade in the final of the hardest class offered at UNC."
      },
    ],
      "SCRUM Master Certification" : [
        {
          id: 3,
          school : "Scrum Alliance",
          description : "Registered Certified SCRUM Master."
        },
      ],
      
      "Thru-hiked the Appalachian Trail" : [
        {
          id: 4, 
          school : "Appalachian Trail",
          description : "Spent over 5 months in the woods and hiked the 2186.5 miles from Springer Mountain, Georgia to Mount Katahdin, Maine."
        },
      ],
  })
  return (
<div className="md:h-screen w-5/6 md:w-2/6 flex flex-col justify-center md:justify-start m-auto sm:px-0">
      <h3 className="flex justify-center font-semibold text-2xl mt-14 md:text-5xl align-middle pb-5">
        Education
      </h3>
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 lg:text-sm text-xs font-medium leading-5 text-black',
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
                      {post.school}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li><span className='font-extrabold'>{post.employer}</span></li>
                      <li>&middot;</li>
                      <li><span className='font-bold text-black'>{post.GPA}</span></li>
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
export default Education