import React from 'react';
import ChevronLeft from '../assets/Icons/chevron-left.png';

function InputOtp(props) {
    const Email = 'sommyghvghhcghg@gmail.com'
    return (
        <>
            <div className='min-w-full flex flex-col items-center md:min-w-[400px] md:py-18 md:mx-auto'>
                    <div className='flex flex-col items-start gap-4 w-full '>
                <a href='/' className='lg:flex items-start gap-[8px] hidden p-0 absolute top-8'>
                    <img src={ChevronLeft} alt="chevron-left" />
                    <span>Back to Email Address</span>
                </a>
                    <div className='flex flex-col items-start gap-8 w-full lg:relative lg:-top-10'>
                        <div className='flex flex-col gap-[6px] w-full '>
                                    <h1 className=" font-extrabold text-2xl text-[#052228] ">Verify Your Email Address</h1>
                                    <p className="text-base font-medium min-w-[380px] text-Gray600 tracking-tighter">An OTP code has been sent to <span className='text-PB400'>{Email}</span><br /> Enter the code below to verify your email address</p>
                        </div>  
                    </div>
                </div>
            </div>
         
        </>
    );
}

export default InputOtp;