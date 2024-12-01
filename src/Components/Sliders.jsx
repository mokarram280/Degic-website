import React, { useState } from 'react'
import { ChevronLeft,ChevronRight } from '@mui/icons-material';
import Marquee from 'react-fast-marquee';
function Sliders() {
    const Slides =[
        {
            id:1,
            header:"Make more time for the work that matters most",
            description:"Best software platform for running an internet business.",
            image:"Group 35.svg"
        },
        {
            id:2,
            header:"Make more time for the work that matters most",
            description:"Best software platform for running an internet business.",
            image:"Component 1.svg"
        },
        {
            id:3,
            header:"The quickest way to create modern presentation",
            description:"Best software platform for running an internet business.",
            image:"Group 22.svg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = ()=> {
        setCurrentIndex((prevIndex)=> (prevIndex === 0 ? Slides.length - 1 : prevIndex - 1));
    }

    const nextSlide =()=> {
        setCurrentIndex((prevIndex)=> (prevIndex === Slides.length - 1 ? 0 : prevIndex + 1));
    }

    const{header,description,image} = Slides[currentIndex];
  return (
    <>
        <section className='max-w-[1400px] py-24 px-6 md:px-12 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center gp-20'>
                <div className='flex flex-col w-full justify-between md:w-1/2 space-y-4'>
                    <div className='flex gap-2'>
                    <img className='w-6 mb-4' src="/Shape.svg" alt="" />
                      <h5 className='text-md font-bold'>Logo</h5>
                    </div>
                    <h1 className='text-2xl md:text-5xl font-bold text-black max-w-md'>{header}</h1>
                    <p className='text-gray-400 max-w-sm text-lg'>{description}</p>

                    <div className='flex items-center space-x-4 mt-4'>
                        <button onClick={prevSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300'>
                            <ChevronLeft className='text-gray-700' />
                        </button>
                        <button onClick={nextSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300'>
                            <ChevronRight className='text-gray-700' />
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img className='w-full md:w-[65%] object-cover' src={image} alt="" />
                </div>
            </div>

            <div className='flex justify-center items-center mt-16'>
                <Marquee>
                <img className='w-full object-cover md:px-6' src="/Logos.svg" alt="" />
                </Marquee>
            </div>
        </section>
    </>
  )
}

export default Sliders;