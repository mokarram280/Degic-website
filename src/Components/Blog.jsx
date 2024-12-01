import React from 'react'
import { ArrowForward } from '@mui/icons-material';
function Blog() {
    const CardData = [
        {
            id:1,
            imgSrc:"Group 41.svg",
            title:"Make myspace your best designed space",
            des:"A lot of different components that will help you create the perfect look for your project",
            buttonLable:"Design"
        },
        {
            id:2,
            imgSrc:"Group 39.svg",
            title:"My company culture has changed today",
            des:"A lot of different components that will help you create the perfect look for your project",
            buttonLable:"3D illustrations"
        },
        {
            id:3,
            imgSrc:"Group 40.svg",
            title:"Professionals in craft! All products were super great",
            des:"A lot of different components that will help you create the perfect look for your project",
            buttonLable:"Development"
        }
    ]
  return (
    <>
        <section className='max-w-[1400px] mx-auto py-12 px-6'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-8 px-6'>
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center md:text-start font-semibold text-gray-900'>Get more from our blog</h1>
                    <p className='max-w-sm text-lg mt-2 text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
                </div>
                <div>
                <button className='bg-[#5F62E226] text-[#5F62E2] font-semibold py-2 px-5 rounded-md flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white mx-auto sm:mx-0 transition duration-300'>
                       Explore All
                       <ArrowForward sx={{fontSize:"24px"}} />
                   </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !p-5'>
                {
                    CardData.map((Card)=>(
                        <div key={Card.id} className='bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition duration-300'>
                            <img className='' src={Card.imgSrc} alt="" />
                        <div className='p-6 space-y-6'>
                            <h3 className='text-xl md:text-2xl font-semibold'>{Card.title}</h3>
                            <p className='text-lg text-gray-500'>{Card.des}</p>
                            <button className='bg-[#2AB6911C] text-green-500 py-1 px-2 rounded-md text-sm hover:bg-green-300 hover:text-white transition duration-300'>{Card.buttonLable}</button>
                         </div> 
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Blog;