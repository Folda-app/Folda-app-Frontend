import React from 'react';
import NavBar from './NavBar';
import Google from '../assets/Illustras/Google.png';

function InputEmail(props) {
    return (
        <>
        <div className='min-w-full flex flex-col items-center md:min-w-[400px] md:py-18 md:mx-auto'>
           <NavBar isOnBoardPage={true} darkColorScheme='true'/>
             <div className='flex flex-col items-start gap-4 w-full lg:min-w-[400px] mt-16 lg:-mt-16'>
             <div className=" flex flex-col gap-[20px] items-start px-4 w-full ">
                    <div className='flex flex-col gap-[6px] w-full h-[68px] '>
                        <h1 className=" font-extrabold text-xl lg:text-2xl text-[#052228] ">Create Account</h1>
                        <span className="text-base font-medium text-Gray600">Enter your email to continue</span>
                    </div>
                    <a href='#' className="flex justify-center gap-3 items-center py-3 px-8 border-solid border border-[#F4F7FB] bg-white border-box w-full rounded-3xl ">
                        <img src={Google} alt="google Img" />
                        <span className='text-sm font-bold text-Gray600  tracking-tight'>Signup with google</span>
                    </a>
                </div>

                <div className="flex flex-col gap-[18px] items-start px-4 w-full ">
                    <div className="flex flex-col gap-[8px] w-full items-start">
                        <label htmlFor="" className="font-normal block text-xs tracking-tight text-Gray600 w-[84px] ">Email Address</label>
                        <input type="email" className="items-center Gray100 w-full py-3 px-4 bg-Gray100 focus:border rounded-sm outline-none  gap-2 flex focus:border-PB400 " placeholder="olumidegreyy24@gmail.com" />
                    </div>
                </div>

                <div className="flex gap-[6px] px-4">
                    <input type="checkbox" name="" className="w-4 h-4 cursor-pointer"  />
                    <span className="font-normal text-sm text-Gray600 tracking-tight">I agree to folda's terms and condition</span>
                </div>
                <div className="flex flex-col items-start gap-[8px] w-full px-4">
                    <a href="/verify" className="w-full  px-2.5 gap-1 py-3  items-center justify-center rounded-3xl flex  bg-PB400 ">
                        Continue
                    </a>
                    <span className="sm:mx-0 mx-auto  font-normal text-sm text-Gray600 tracking-tight">Already have an account? <a href="" className="text-PB400 font-semibold">Log in</a></span>
                </div>
            </div>
           </div>

        </>
    );
}

export default InputEmail;