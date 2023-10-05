import React from 'react';
import FounderImage from '../assets/Illustras/HeroImage.png'
import Ceo from '../assets/Illustras/FOLDA-4.jpg';
import Coo from '../assets/Illustras/FOLDA-2.jpg';
import Cto from '../assets/Illustras/FOLDA-3.jpg';

const Founders = [
    {name: 'Pelumi Ambali', role: 'CEO', image: Ceo },
    {name: 'Abisola Faluyi', role: 'COO', image: Coo},
    {name: 'Somtochukwu Umeh', role: 'CTO', image: Cto}
]

function FoundersList(props) {
    return (
        <div className='md:absolute top-9 lg:px-20 md:px-14 '>
            <div className='flex flex-col  items-start gap-2 lg:pb-8 md:pb-6 pb-8 '>
                <h1 className='text-blue-50 text-xl lg:text-4xl md:text-3xl font-extrabold font-Gilroy'>Meet our founders</h1>
                <h5 className='text-sky-200 text-sm lg:text-xl md:text-lg font-normal leading-tight md:leading-9 font-Lato'>Meet the people that are making things possible</h5>
            </div>
            <div className='flex flex-col md:flex-row gap-4 lg:gap-7 '>
                {Founders.map((founder)=> (
                <div className='w-full flex-col justify-start items-start gap-2 flex '>
                    <img src={founder.image} alt="" className='w-full md:w-80 relative rounded-xl object-contain' />
                    <div className='flex-col justify-start items-start gap-1 md:gap-2 flex'>
                        <h3 className='text-blue-50 text-lg md:text-xl font-black leading-9 font-Gilroy'>{founder.name}</h3>
                        <h5 className='text-sky-200 text-sm md:text-md font-medium leading-tight md:leading-relaxed font-Lato'>{founder.role}</h5>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default FoundersList;