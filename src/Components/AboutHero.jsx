import React from 'react';
import { AboutHeader, Blocks, AboutHeaderMobile } from './AboutHeroBase';


function AboutHero(props) {
    return (
        <div className='items-center justify-center md:px-14 lg:px-22 px-4 '>
            <img src={AboutHeader} alt="About Header" className=' w-full md:pt-10 pb-12 hidden md:block' />
            <img src={AboutHeaderMobile} alt="About Header" className='w-full pt-5  md:hidden pb-8' />
            <div className='justify-between items-center flex-col-reverse  flex md:flex-row lg:gap-20 md:gap-10 pt-5 pb-12 gap-8 md:py-8'>
                <img src={Blocks} alt="" className='object-contain md:w-1/2 justify-center items-center w-full' />
                <div className='md:w-1/2 w-full flex-col justify-start items-start gap-4 md:gap-6 lg:gap-8 flex'>
                    <p className="self-stretch text-emerald-950 text-xl lg:text-4xl md:text-2xl font-extrabold" >We are making real estate investment as seamless as possible</p>
                    <p className="self-stretch text-gray-500 text-sm leading-tight lg:text-xl md:text-md font-normal lg:leading-9 ">Folda is a proptech company offering private and fractional real estate equity investment to africans globally. Folda provides an avenue to own a fraction of a home or commercial assets instead of the entire property. </p>
                </div>
            </div>
        </div>
    );
}

export default AboutHero; 