import React from 'react'
import { ArrowForward } from '@mui/icons-material'
function Presentation() {
    const CardData = [
        {
            source:"Group 4.svg",
            heading:"Managment",
            text:"Software platform for running your new internet business"
        },
        {
            source:"Group 4 (1).svg",
            heading:"Entertainment",
            text:"Software platform for running your new internet business"
        },
        {
            source:"Group 4 (2).svg",
            heading:"Marketing",
            text:"Software platform for running your new internet business"
        },
        {
            source:"Group 4 (3).svg",
            heading:"References",
            text:"Software platform for running your new internet business"
        }
    ];

    const socialLink =[
        {Link:"Group 9.svg"},
        {Link:"Group 10.svg"},
        {Link:"Group 11.svg"},
        
    ]
  return (
    <>
          <section className='bg-gray-50'>
            <div className='container mx-auto flex flex-col lg:flex-row items-center gap-20 px-6 md:px-12 py-12 lg:py-16 max-w-[1400px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2'>
                {CardData.map((card,index)=>(
                    <div
                    key={index}
                    className='p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition duration-300 text-center'
                    >
                        <div className='flex items-center justify-center'>
                            <img src={card.source} alt="" />
                        </div>
                        <div>
                            <h3 className='text-lg md:text-xl text-black font-semibold'>{card.heading}</h3>
                            <p className='text-gray-400 text-sm md:text-base'>{card.text}</p>
                        </div>
                    </div>
                ))}
                </div>
                <div className='w-full md:w-1/2 text-center lg:text-start space-y-6'>
                   <h1 className='text-3xl lg:text-5xl font-bold'>The quickest way to create modern presentation</h1>
                   <p className='text-gray-400 text-sm md:text-base'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>

                   <button className='bg-[#5F62E226] text-[#5F62E2] font-semibold py-2 px-5 rounded-md flex items-center justify-center gap-3 hover:bg-indigo-200 mx-auto sm:mx-0 transition duration-300'>
                       Explore All
                       <ArrowForward sx={{fontSize:"24px"}} />
                   </button>

                   <p className='text-gray-500 !mt-24'>Follow us</p>
                   <div className='flex justify-center md:justify-start items-center gap-6 mt-4'>
                    {
                       socialLink.map((social,index)=>(
                         <a href="" key={index} className='bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300'>
                            <img className='w-12 h-12' src={social.Link} alt="" />
                         </a>
                       ))
                    }
                   </div>
                </div>
            </div>
          </section>
    </>
  )
}

export default Presentation;