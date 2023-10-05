import React from 'react';
import StackedAvatars from '../assets/Illustras/StackedAvatars.png';
import CarouselTestimonial from './TestimonialCard';


function Testimonials(props) {
    return (
        <div className='bg-white justify-center items-center lg:py-20 lg:px-24 md:px-12 py-8 md:py-14 '>
            <div className='flex flex-col-reverse px-4 md:px-0 md:flex-row gap-8 md:gap-12 lg:gap-16 justify-between items-center grow shrink basis-0 self-stretch'>
                <div className=' w-full md:w-1/2 bg-orange-50 rounded-xl border border-orange-200  '>
                    <div className=''>
                        <CarouselTestimonial/>
                    </div>
                    <div className=' bg-white rounded-xl justify-center items-center  py-10 px-4 my-4 mx-5 '>
                        <div className='  justify-between items-center lg:gap-10 flex w-full'>
                            <h5><span className="text-emerald-950 text-2xl font-extrabold leading-normal">12k+</span><span className="text-emerald-950 text-xl font-normal leading-9"> </span><span className="text-gray-400 text-lg font-normal leading-8">Happy users</span></h5>
                            <img src={StackedAvatars} alt="StackedAvatars" className='w-14' />
                        </div>
                    </div>
                </div>
                
                <div className=" md:w-1/2 flex-col justify-center items-start gap-4 md:gap-8 flex ">
                    <div className=" text-emerald-950 lg:text-4xl md:text-3xl text-xl font-extrabold font-Gilroy">Hear from our happy customers</div>
                    <div className=" text-gray-500 text-sm lg:text-xl md:text-md font-normal leading-tight lg:leading-9 md:leading-relaxed font-lato">Hear from our customers how Folda has improved their standard of living</div>
                 </div>
                
            </div>
        </div>
    );
}

export default Testimonials;