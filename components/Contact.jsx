import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";


const Contact = () => {
  const { register, handleSubmit, } = useForm();
  const onSubmit = handleSubmit((data) => {
    window.location.href = `mailto:jeff.ryan.alexander@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} ${data.email}`; 
  })


  return (
    <div className='flex flex-col sm:max-w-7xl px-10 pt-12 md:mt-0 justify-evenly mx-auto items-center'>
        <h3 className="flex font-semibold text-3xl pb-2">
        Contact
      </h3>
      <div className='flex flex-col space-y-3'>
        <div className='space-y-1'>
            <div className='flex space-x-5 justify-center'>
                <EnvelopeIcon className='text-orange-400/70 h-4 w-4 md:h-7 md:w-7 animate-pulse self-start' />
                <p className='text-xl font-bold'>
                jeff.ryan.alexander@gmail.com
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <MapPinIcon className='text-orange-400/70  h-4 w-4 md:h-7 md:w-7 animate-pulse self-start' />
                <div className='flex flex-col space-y-1 items-center'>
                <p className='text-xl font-bold'>
                    Asheville, North Carolina
                </p>
                <p className='text-md text-gray-900'>
                  Open to Remote Work
                </p>
                </div>
            </div>
        </div>

        <form onSubmit={onSubmit} className='flex flex-col space-y-2 sm:w-fit mx-auto rounded-lg'>
            <div className='flex flex-col sm:flex-row space-x-2 space-y-2 sm:space-y-0'>
                <input {...register('name')}className='contactInput bg-blue-100 border-transparent focus:outline-none placeholder:italic placeholder:text-slate-500 placeholder:pl-1 pl-1' type='text' placeholder='Name' />
                <input {...register('email')}className='contactInput bg-blue-100 border-transparent focus:outline-none placeholder:italic placeholder:text-slate-500 placeholder:pl-1 pl-1' type='email' placeholder='Email' />
            </div>

            <input {...register('subject')}className='contactInput bg-blue-100 border-transparent focus:outline-none placeholder:italic placeholder:text-slate-500 placeholder:pl-1 pl-1' type='text' placeholder='Subject' />

            <textarea {...register('message')} className='contactInput bg-blue-100 border-transparent focus:outline-none placeholder:italic placeholder:text-slate-500 placeholder:pl-1 pl-1' placeholder='Message' />

            <button className='bg-blue-400/70 py-3 px-8sm:py-5 sm:px-10 rounded-md text-black font-bold'>
                Submit
            </button>
        </form>
      </div>
    </div>
  )
}
export default Contact