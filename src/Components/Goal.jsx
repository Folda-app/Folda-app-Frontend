import React from 'react';
import Finance from '../assets/Illustras/Finance.png';
import Bolt from '../assets/Illustras/Bolt.png';
import Secure from '../assets/Illustras/Secure.png';
import Stars from '../assets/Illustras/Stars.png';

const Items = [
    {icon: Finance, styling:' p-5 md:p-8' },
    {icon: Stars, styling: 'p-0'},
    {icon: Secure, styling: 'p-0 w-56'},
    {icon: Bolt, styling:'p-6 md:p-8'},
]
function Goal() {
    return (
        <div className='bg-blue-50 justify-center items-center flex px-5 pt-11 pb-20 md:px-20 md:py-8 lg:px-44 lg:py-16'>
            <div className='self-stretch flex-col justify-start items-start gap-12 flex'>
                <div className="flex-col justify-start items-start gap-3 flex w-full">
                    <div className=" text-emerald-950 text-xl md:text-3xl lg:text-4xl font-extrabold">Our Goal</div>
                    <div className=" text-gray-500 text-sm md:text-md lg:text-xl font-normal leading-tight md:leading-relaxed lg:leading-9">Our values proceeds us</div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-6'>
                    {Items.map((item) => (
                        <div className="w-full  px-4 py-4 bg-white rounded-xl flex-col justify-center items-center flex">
                        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                          <div className="w-full h-48 py-14 bg-blue-50 rounded-md justify-center items-center flex">
                            <img src={item.icon} alt="" className={`relative w-40 ${item.styling} `} />
                          </div>
                          <div className="w-full self-stretch  flex-col justify-start items-start gap-1.5 md:gap-3 flex">
                            <div className="self-stretch text-cyan-500 text-lg md:text-md lg:text-xl font-extrabold ">Growth</div>
                            <div className="self-stretch text-gray-500 text-sm md:text-xs lg:text-md font-medium leading-snug lg:leading-relaxed">We are focused on providing quality assets for investments. Folda is a proptech company offering private and fractional real estate equity investment to africans globally. </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Goal;