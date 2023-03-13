import { SocialIcon
 } from "react-social-icons"
const Footer  = () => {
  return (
    <footer className='p-9 md:p-11 text-center text-sm mt-20 bg-gray-400/50'>
      <ul className='flex flex-row flex-wrap justify-center space-x-[2rem] mb-[4rem]'>
        <li className='hover:text-yellow-200'><a href='#hero'>Home</a></li>
        <li className='hover:text-yellow-200'><a href='#about'>About Me</a></li>
        <li className='hover:text-yellow-200'><a href='#projects'>Projects</a></li>
        <li className='hover:text-yellow-200'><a href='#experience'>Experience</a></li>
        <li className='hover:text-yellow-200'><a href='#education'>Education</a></li>
        <li className='hover:text-yellow-200'><a href='#contact'>Contact</a></li>
      </ul>

      <div className='flex flex-wrap justify-center space-x-[2rem] mb-[4rem]'>
      <SocialIcon
            url="https://github.com/jeff-shakes"
            className="border-[1px] rounded-full p-3 flex border-transparent hover:bg-yellow-100 bg-white"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/jeff-alexander-data-scientist/"
            className="border-[1px] rounded-full p-3 flex border-transparent hover:bg-yellow-100 bg-white"
          />
      </div>
      <div className='text-purple-700'>
        <a href='https://zach-sykes.com/' target='_blank'   rel='noreferrer'>Website created by <span className='font-bold text-purple-900'>Sykes Designs</span></a>
      </div>
    </footer>
  )
}

export default Footer
