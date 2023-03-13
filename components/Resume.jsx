
import Link from 'next/link'

const Resume = () => {
  return (
    <div className='rounded-lg border-[1px] border-blue-500 px-8 py-3 2xl:px-12 2xl:py-6 hover:bg-slate-100 font-bold'>
      <a href='assets/jeffResume.pdf' alt='Jeff Alexander Resume' download className="btn">Resume</a>
    </div>
  )
}

export default Resume
