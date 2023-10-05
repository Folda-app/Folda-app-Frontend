import React from 'react';
import PuzzleImage from '../assets/Illustras/PuzzleImage.png';
import SmileyFolda from '../assets/Illustras/SmileyFolda.png';
import Trophy from '../assets/Illustras/Trophy.png';

function CommunityDetails(props) {
    return (
        <div>
            {/* Detail 1 */}
            <div className='flex items-center justify-center px-4 py-12 md:px-20 lg:px-36 md:py-16  '>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-10 lg:gap-20'>
                    <div className='bg-slate-100 rounded-3xl justify-center items-center flex w-full py-10 md:w-1/2 md:py-20 px-6 '>
                        <img src={PuzzleImage} alt="Puzzle Image" className='relative ' />
                    </div>
                    <div className='flex-col justify-start items-start gap-4 md:gap-8 flex w-full md:w-1/2'>
                        <h1 className='self-stretch text-emerald-950 text-xl md:text-2xl lg:text-3xl font-extrabold font-Gilroy'>Grow with peers of common goals</h1>
                        <p className='self-stretch text-gray-500 text-sm md:text-base lg:text-lg font-normal leading-tight md:leading-snug lg:leading-9 font-Lato'>Folda is a proptech company offering private and fractional real estate equity investment to africans globally. Folda provides an avenue to own a fraction fo home or commercial assets instead of the entire property.</p>
                    </div>
                </div>
            </div>
            {/* Details 2 */}
            <div className='flex items-center justify-center px-4 py-12 md:px-20 lg:px-36 md:py-16'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 lg:gap-20'>
                    <div className='flex-col justify-start items-start gap-4  md:gap-8 flex w-full md:w-1/2'>
                        <h1 className='self-stretch text-emerald-950 text-xl md:text-2xl lg:text-3xl font-extrabold font-Gilroy'>Grow with peers of common goals</h1>
                        <p className='self-stretch text-gray-500 text-sm md:text-base lg:text-lg font-normal leading-tight md:leading-snug  lg:leading-9 font-Lato'>Folda is a proptech company offering private and fractional real estate equity investment to africans globally. Folda provides an avenue to own a fraction fo home or commercial assets instead of the entire property.</p>
                    </div>
                    <div className='bg-slate-100 rounded-3xl justify-center items-center w-full flex md:w-1/2 py-8 px-16 md:py-12 md:px-6 '>
                        <img src={SmileyFolda} alt="Puzzle Image" className='relative  ' />
                    </div>
                </div>
            </div>
            {/* Details 3 */}
            <div className='flex items-center justify-center px-4 py-12 md:px-20 lg:px-36 md:py-16 '>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-10 lg:gap-20'>
                    <div className='bg-slate-100 rounded-3xl justify-center items-center flex w-full md:w-1/2 py-8 md:py-16 px-6 '>
                        <img src={Trophy} alt="Puzzle Image" className='relative ' />
                    </div>
                    <div className='flex-col justify-start items-start gap-4 md:gap-8 flex w-full md:w-1/2'>
                        <h1 className='self-stretch text-emerald-950 text-xl md:text-2xl lg:text-3xl font-extrabold font-Gilroy'>Grow with peers of common goals</h1>
                        <p className='self-stretch text-gray-500 text-sm md:text-base lg:text-lg font-normal leading-tight md:leading-snug lg:leading-9 font-Lato'>Folda is a proptech company offering private and fractional real estate equity investment to africans globally. Folda provides an avenue to own a fraction fo home or commercial assets instead of the entire property.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CommunityDetails;