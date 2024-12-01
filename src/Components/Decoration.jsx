import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ArrowForward } from '@mui/icons-material';
function Decoration() {
  return (
    <>
       <section className='max-w-[1400px] mx-auto py-16 px-6 lg:px-16 gap-24'>
           <div className='flex flex-col md:flex-row justify-between items-center'>
              <div className='flex-1 items-start'>
                  <img className='w-full h-auto max-w-lg mb-12 md:mb-0' src="/Group 17.svg" alt="" />
              </div>
              <div className='flex flex-1 flex-col gap-4'>
                 <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>
                    Make more time for the work
                 </h1>
                 <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-green-600 me-2' />
                    <span>Many ways to use illustrations in design</span>
                </p>                
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-green-600 me-2' />
                    <span>Simply explained with illustrations</span>
                </p>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-green-600 me-2' />
                    <span>Make more time for the work</span>
                </p>
                <div className='mb-10'>
                <button className='bg-[#5F62E226] text-[#5F62E2] font-semibold py-2 px-5 rounded-md flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white mx-auto sm:mx-0 transition duration-300'>
                       Explore All
                       <ArrowForward sx={{fontSize:"24px"}} />
                   </button>
                </div>
              </div>
           </div>

           {/* second section */}
           <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-24'>
              <div className='flex flex-1 flex-col gap-4'>
                 <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>
                    Make more time for the work
                 </h1>
                 <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-green-600 me-2' />
                    <span>Many ways to use illustrations in design</span>
                </p>                
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-green-600 me-2' />
                    <span>Simply explained with illustrations</span>
                </p>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-green-600 me-2' />
                    <span>Make more time for the work</span>
                </p>
                <div className='mb-10'>
                <button className='bg-[#5F62E226] text-[#5F62E2] font-semibold py-2 px-5 rounded-md flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white mx-auto sm:mx-0 transition duration-300'>
                       Explore All
                       <ArrowForward sx={{fontSize:"24px"}} />
                   </button>
                </div>
              </div>
              <div className='flex-1 items-start'>
                  <img className='w-full h-auto max-w-lg mb-12 md:mb-0' src="/Group 22.svg" alt="" />
              </div>
           </div>
       </section>
    </>
  )
}

export default Decoration;