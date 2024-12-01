import React from 'react'

function Hero() {
  return (
    <>
      <section className='container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 px-6 lg:px-16'>
        <div className='flex-1 flex flex-col items-start gap-12'>
            <h1 className='text-4xl lg:text-6xl max-w-lg font-bold'>Simply explained with illustrations</h1>
            <p className='text-lg md:text-xl text-gray-400 max-w-md'>There are a lot of different components that will help you create the perfect look for your project</p>
            <div className='flex gap-3'>
                <button className='bg-[#5F62E2] text-white font-semibold py-2 px-5 rounded-md hover:bg-blue-700 transition duration-300'>Get Started</button>
                <button className='bg-[#5F62E226] text-[#5F62E2] font-semibold py-2 px-5 rounded-md'>Learn More</button>
            </div>
        </div>
        <div className='flex-1'>
            <img className='w-full md:max-w-md h-auto' src="/Component 1.svg" alt="" />
        </div>
      </section>
    </>
  )
}

export default Hero;