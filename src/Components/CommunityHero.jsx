import React from 'react';
import CommunityImage from '../assets/Illustras/CommunityImage.png';
import {Link} from 'react-router-dom'

function CommunityHero(props) {
    return (
        <div className='px-4 md:px-6 lg:px-20 py-10 justify-center items-center bg-white'>
            <div className='flex md:flex-row flex-col justify-between items-center gap-10'>
                <div className='flex flex-col md:w-1/2 justify-start items-start gap-8 lg:gap-10'>
                    <div className='flex-col justify-start items-center gap-2 md:gap-4 lg:gap-6 flex'>
                    <h1 className='text-emerald-950 text-3xl md:text-4xl lg:text-5xl font-extrabold'>Growth is easy with a community</h1>
                    <h5 className='text-gray-500 text-sm md:text-lg lg:text-xl font-normal leading-tight lg:leading-9'>Meet peers with similar goals and upscale your investment journey</h5>
                    </div>
                    <Link to='/register' className='w-36 px-1.5 py-2.5 bg-sky-300 rounded-3xl justify-center items-center gap-1 flex'>
                        <span className='text-emerald-950 text-sm md:text-base font-bold leading-normal'>Join Now</span>
                    </Link> 
                </div>
                <div className='md:w-96 w-full'>
                    <img src={CommunityImage} alt="Community Image" className='relative' />
                </div>
            </div>
        </div>
    );
}

export default CommunityHero;