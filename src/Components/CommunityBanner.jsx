import React from 'react';
import { Link } from 'react-router-dom';


function CommunityBanner(props) {
    return (
        <div className='md:pt-4 px-4 md:px-8 bg-white justify-center items-center flex'>
            <div className='bg-[url("assets/Illustras/CommunityBanner.png")] bg-contain bg-no-repeat hidden md:flex bg-center relative rounded-3xl w-full md:py-32 lg:py-44 justify-center '>
                <Link to='/register' className='px-1.5 py-2 bg-blue-50 rounded-3xl justify-center items-center gap-0.5 flex md:w-28 lg:w-36 absolute md:mt-10 lg:mt-12'>
                    <h5 className='text-cyan-600 text-base font-bold leading-normal'>Join Now</h5>
                </Link>
            </div>

            <div className='bg-[url("assets/Illustras/CommunityBanner2.png")] bg-cover bg-no-repeat flex md:hidden bg-center relative rounded-lg py-12 justify-center w-full  '>
                <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-center text-blue-50 text-2xl font-extrabold font-Gilroy'>Join our community today</h2>
                    <h5 className='text-center text-sky-200 text-sm font-normal leading-tight'>Get to meet people with similar goals</h5>
                </div>
                <Link to='/register' className='w-24 bg-blue-50 px-1.5 justify-center items-center flex py-2 rounded-3xl gap-0.5 mt-6'>
                <h6 className='text-cyan-600 font-bold text-sm leading-normal '>Join now</h6>
            </Link>
                </div>
            </div>
        </div>
    );
}

export default CommunityBanner;