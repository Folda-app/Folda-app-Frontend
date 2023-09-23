import React from 'react';


function StepItem({Icon, Title, Note}) {
    return (
        <div className='md:px-4 px-10 py-10  md:py-5 lg:px-7 lg:py-6 bg-white rounded-md justify-center items-center inline-flex'>
            <div className='self-stretch flex-col justify-start items-start gap-7 inline-flex'>
                <div className='p-2 bg-blue-50 rounded-3xl justify-start items-start gap-2 inline-flex'>
                    <img src={Icon} alt="icon" />
                </div>

                <div className='flex-col justify-start items-start gap-2.5 flex'>
                <div className="text-cyan-500 text-lg  font-extrabold">{Title}</div>
                <div className=" text-gray-500 text-xs font-medium leading-tight">{Note}</div>
                </div>
            </div>
        </div>
    );
}

export default StepItem;