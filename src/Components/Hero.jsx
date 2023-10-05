import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/Illustras/HeroImage.png'
import Quote from '../assets/Icons/quote.png'
import { motion } from 'framer-motion';

function Hero() {
  
    return (
        <div className='bg-white justify-center items-center px-4 py-4 md:px-8 lg:px-16 md:py-8 '>
            <div className='flex flex-col md:flex-row gap-12 lg:gap-24 justify-center items-start'>
                <div className='flex-col justify-start items-start gap-7 flex w-full md:w-1/2 '>
                    <div className='flex flex-col justify-start items-start gap-4 '>
                        <h1 className=' text-2xl md:text-3xl lg:text-4xl  text-emerald-950 font-extrabold font-Gilroy'>We Provide Inclusive Real Estate Solutions</h1>
                        <h6 className='text-gray-500 text-sm md:text-md lg:text-xl font-normal leading-tight lg:leading-9 w-72 md:w-full font-Lato '>Using technology to create a sustainable and a well-tailored real estate portfolio.</h6>
                    </div>
                    <Link to='/register' className='w-36 h-12 px-2.5 py-4 bg-sky-300 rounded-3xl justify-center items-center gap-1 inline-flex'>
                            <span className='text-emerald-950 text-xs md:text-sm font-bold leading-tight md:leading-normal'>Get Started</span>
                        </Link>
                </div>
                <div className='w-full md:w-80 lg:w-96 flex flex-col gap-2'>
                    <img src={HeroImage} alt="Hero Image" className='object-fit' />
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-3 items-center'>
                            <img src={Quote} alt="quote" className='w-7 h-7' />
                            <h1 className=' text-emerald-950 text-md md:text-sm font-medium leading-relaxed'>I grow my money by investing in Folda</h1>
                        </div>
                        <h6 className='pl-10 text-gray-400 text-sm font-bold leading-tight'><span>-</span> Justin Bella</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;