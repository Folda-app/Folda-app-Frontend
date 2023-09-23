import React from 'react';
import { Link } from 'react-router-dom';


function CommunityBanner(props) {
    return (
        <div className='md:pt-6 md:pb-20 px-4 lg:pb-28 md:px-8 bg-white justify-center items-center flex'>
            <div className='bg-[url("assets/Illustras/CommunityBanner.png")] bg-contain bg-no-repeat hidden md:flex bg-center relative rounded-3xl w-full py-52 justify-center '>
                <Link to='/register' className='px-1.5 py-2 bg-blue-50 rounded-3xl justify-center items-center gap-0.5 flex w-36 absolute mt-12'>
                    <h5 className='text-cyan-600 text-base font-bold leading-normal'>Join Now</h5>
                </Link>
            </div>

            <div className='bg-[url("assets/Illustras/CommunityBanner2.png")] bg-contain bg-no-repeat flex md:hidden bg-center relative rounded-lg py-24 justify-center w-full '>
                <div className='flex flex-col gap-4 px-4 justify-center items-center'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-center text-blue-50 text-2xl font-extrabold'>Join our community today</h2>
                    <h5 className='text-center text-sky-200 text-sm font-normal leading-tight'>Get to meet people with similar goals</h5>
                </div>
                <Link to='/register' className='px-1.5 w-24 py-3 bg-blue-50 rounded-3xl justify-center items-center gap-0.5 flex'>
                    <h6 className='text-cyan-600 text-base font-bold leading-normal'>Join Now</h6>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default CommunityBanner;