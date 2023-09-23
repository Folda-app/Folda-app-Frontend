import React from 'react';
import {Link} from 'react-router-dom'


function IndexBanner(props) {
    return (
        <div className='bg-white items-center justify-center px-4 md:px-8 md:py-6'>
           <div className='bg-center bg-[url("assets/Illustras/IndexBanner.png")] bg-contain py-52 bg-no-repeat rounded-xl hidden md:flex justify-center relative w-full '>
            <Link to='/register' className='w-32 px-2 py-3 mt-6 bg-blue-50 rounded-3xl justify-center items-center gap-1 flex absolute'>
                <h5 className='text-cyan-600 text-base font-bold leading-normal'>Register</h5>
            </Link>
           </div>
           <div className='bg-center relative w-full bg-contain md:hidden flex justify-center bg-no-repeat bg-[url("assets/Illustras/IndexBanner2.png")] py-32'>
            <Link to='/register' className='w-24 absolute bg-blue-50 px-1.5 justify-center items-center flex py-2 rounded-3xl gap-0.5 mt-14'>
                <h6 className='text-cyan-600 font-bold text-sm leading-normal '>Register</h6>
            </Link>
           </div>
        </div>
    );
}

export default IndexBanner;