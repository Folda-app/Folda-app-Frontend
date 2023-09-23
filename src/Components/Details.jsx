import React from 'react';
import BuildingIllustra1 from '../assets/Illustras/DescImage1.png';
import StackedAvatars from '../assets/Illustras/StackedAvatars.png';
import PortCard from '../assets/Illustras/DescImage2.png';



function Details(props) {
    return (
        <>
        {/* SECTION 1 */}
        <div className='lg:px-20 md:px-10 md:py-12 lg:py-20 justify-center items-center'>
            
            {/* <div className='md:hidden flex gap-1 px-4 py-10 '>
                <img src={StackedAvatars} alt="Stacked Avatars" />
                <h5 className='w-full'><span className="text-gray-500 text-sm font-medium leading-tight">Trusted by </span><span className="text-emerald-950 text-sm font-bold leading-tight">12k+ </span><span className="text-gray-500 text-sm font-medium leading-tight">customers</span></h5>
            </div> */}
           <div className='flex flex-col-reverse md:flex-row gap-5 lg:gap-24 md:gap-12 justify-center items-center'>
                
                <img src={BuildingIllustra1} alt="Building2" className='lg:w-2/5 md:w-72 px-4 md:mx-0 ' />
                
                <div className='flex-col justify-center items-start gap-4 md:gap-8 flex py-4 px-4 '>
                    <p className=' text-emerald-950 text-xl lg:text-4xl md:text-3xl font-extrabold w-full md:w-96'>We offer private and fractional real estate equity investment to africans globally</p>
                    <p className=' text-gray-500 md:text-md lg:text-xl font-normal md:leading-relaxed lg:leading-9 leading-tight text-sm  md:w-80 lg:w-96'>
                    Folda provides an avenue to own a fraction of home or commercial assets instead of the entire property
                    </p>
                </div>
           </div>
           </div>

           {/* SECTION 2 */}
           <div className='lg:px-20 md:px-10 md:py-12 pt-10 lg:py-20 justify-center items-center '>
                <div className='flex flex-col md:flex-row gap-5 lg:gap-24 md:gap-12 justify-center items-center'>
                    <div className='flex-col justify-center items-start gap-4 md:gap-8 flex py-4 px-4 '>
                        <p className='text-emerald-950 text-xl lg:text-4xl md:text-3xl font-extrabold w-full md:w-80 lg:w-96'>We understand the power of small beginning </p>
                        <p className=' text-gray-500 md:text-md lg:text-xl font-normal md:leading-relaxed lg:leading-9 leading-tight text-sm w-full md:w-80 lg:w-96'>Folda enables investing in real estate with affordable capital and earn proceeds from asset use, managements.</p>
                    </div>
                    <img src={PortCard} alt="PortCard" className='lg:w-2/5 md:w-72 px-4 md:mx-0 ' />
                </div>
           </div>
        </>
    );
}

export default Details;