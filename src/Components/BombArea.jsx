import React from 'react'

function BombArea() {
  return (
    <>
        <section className='bg-indigo-500 w-full h-auto mb-5'>
            <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between mt-24'>
                <div className='flex flex-1 flex-col p-12 md:w-1/2'>
                    <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white'>The quickest way to create awesome presentation</h1>
                <div className='flex flex-wrap gap-3 mt-10'>
                    <button className='bg-green-500 text-white font-semibold py-2 px-5 rounded-md hover:bg-green-400 hover:text-black transition duration-300'>Get Started</button>

                    <button className='bg-[#f9f9fd26] text-white font-semibold py-2 px-5 rounded-md'>Learn More</button>
                </div>
                </div>
                <div className='flex-1 md:w-1/2'>
                    <img src="/bomb 1.svg" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default BombArea;