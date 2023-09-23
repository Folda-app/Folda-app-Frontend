import React from 'react';
import HeroImage from '../assets/Illustras/HeroImage.png'
import Quote from '../assets/Icons/quote.png'
import { motion } from 'framer-motion';

function Hero() {
    const heroDiv = {
        hidden: { opacity: 0},
        visible: {opacity: 1}
    }

    const heroText = {
        hidden: {  scale: 0.5, },
        visible: { 
            scale: 1, 
            transition: {
                delay: 0.5
        }}

    }
    const heroImg = {
        hidden: {
            y: -60
        },
        visible: {
            y: 0,

        }
    }
    return (
        <div className='flex justify-center items-center'>
        <div className='md:flex-row flex flex-col  w-full items-center justify-center lg:px-20 px-4 md:px-8 py-8 lg:gap-52 xl:gap-96 gap-10 max-w-screen-xl'>
            <div className='flex flex-col  items-start gap-10  '>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={heroDiv} 
                    className='flex flex-col w-full gap-4'>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={heroText}
                        className='lg:text-4xl md:text-3xl text-2xl font-extrabold  md:tracking-wide tracking-widest text-PB900 w-11/12 lg:w-[360px] '>Providing Inclusive Investments in Real Estate</motion.h1>
                    <h5 className='tracking-tight text-Gray700 w-10/12 text-sm'>Invest in real estate and earn proceeds from asset use and management </h5>
                </motion.div>
                <a href="/register" className='flex justify-center items-center px-5 py-3 rounded-full gap-1 bg-PB400 text-sm'>Get Started</a>
                <span></span>
            </div>
            <div className='flex flex-col w-full items-start gap-4'>
                <motion.img
                    variants={heroImg}
                    src={HeroImage} alt="Hero image" className='object-contain max-h-[65vh] w-full' />
                <div className='flex items-start lg:gap-1.5 gap-3 md:gap-2 '>
                    <img src={Quote} alt="quote" className='w-6 h-6' />
                    <div className='flex flex-col'>
                    <h2 className=' text-emerald-950 text-base font-medium leading-relaxed'>I grow my money by investing with folda</h2>
                    <h3 className='text-gray-400 text-sm font-bold leading-tight'>-Jusin Bella</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;