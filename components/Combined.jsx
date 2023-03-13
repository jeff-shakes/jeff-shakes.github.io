import Education from "./Education"
import Experience from "./Experience"

const Combined = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center space-y-2 md:space-y-0'>
      <Experience />
      <Education />
      </div>
  )
}
export default Combined