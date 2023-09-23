import React from 'react';
import FoundersList from './FoundersList';

function Founders(props) {
    return (
        <div className='bg-white items-center justify-center px-4 md:px-8 md:py-6'>
            <div className='bg-[url("assets/Illustras/FoundersBanner.png")] bg-no-repeat bg-cover  hidden md:block md:py-64 lg:py-72 xl:py-80 relative bg-center rounded-3xl  '>
                <FoundersList/>
            </div>
            <div className='bg-PB900 rounded-xl px-14 py-16 justify-center items-center relative flex md:hidden '>
                <FoundersList/>
            </div>
        </div>
    );
}

export default Founders;