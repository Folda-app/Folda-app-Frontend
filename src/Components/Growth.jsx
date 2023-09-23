import React from 'react';

const BenchMark = [
    {number: '12k+', variable: 'Monthly Users', style: 'py-8'},
    {number: '20+', variable: 'Supporting Brands', style: 'py-8'},
    {number: '6M+', variable: 'Average monthly rental income in naira', style: 'py-6 md:py-4'},
    {number: '200K+', variable: 'Average monthly rental income in naira', style: 'py-6 md:py-4'},
]
function Growth(props) {
    return (
        <div className='px-4 py-12 md:px-20 lg:px-44 md:py-16 lg:py-36 bg-white justify-center items-center flex '>
            <div className='grow shrink basis-0 self-stretch justify-between items-center flex gap-14 flex-col md:flex-row'>
                <div className='flex-col justify-start items-start gap-3 md:gap-6 lg:gap-8 flex md:w-1/2'>
                    <p className='text-emerald-950 text-xl lg:text-4xl font-extrabold '>Our growth over the years</p>
                    <p className='text-gray-500 lg:text-xl font-normal leading-tight lg:leading-9'>Folda provides an avenue to own a fraction of home or commercial assets instead of the entire property.</p>
                </div>
                <div className='grid grid-cols-2  gap-4 md:w-1/2'>
                    {BenchMark.map((mark) => (
                        <div className={`w-full px-3 lg:px-1.5 ${mark.style} bg-slate-100 rounded-lg justify-center items-center flex`}>
                        <div className=" self-stretch flex-col justify-start items-center gap-2 md:gap-4 inline-flex">
                          <p className="text-cyan-500 text-2xl lg:text-4xl font-extrabold ">{mark.number}</p>
                          <p className=" text-gray-500 text-center text-xs lg:text-sm font-normal lg:leading-relaxed">{mark.variable}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Growth;