import React from 'react';
import StepItem from './StepItem';
import {Link} from 'react-router-dom';
import homeIcon from '../assets/Icons/home-smile.png';
import Wallet from '../assets/Icons/wallet.png';
import trendUp from '../assets/Icons/trend-up.png';
import rocket from '../assets/Icons/rocket.png';
function Steps(props) { 
    const CreateAccount = 'Sign up and begin your investment plans with us.';
    const FundWallet = 'Fast track your investment by activating your wallet';
    const Invest = 'Choose your suitable investment plan';
    const Earn = 'Join the steady cash flow community by investing large and earning big.'
    return (
        <div className=' lg:p-7 w-full bg-white items-center justify-center inline-flex '>
            <div className=' py-10 w-full bg-blue-50 lg:rounded-2xl justify-center items-center gap-8 inline-flex'>
                <div className=' px-12 md:px-8 lg:px-14 flex self-stretch flex-col md:flex-row justify-center items-center  gap-4 md:gap-0 lg:gap-16 '>
                    <div className=' flex-col justify-start items-start gap-6 inline-flex '>
                        <div className='flex-col justify-start items-start gap-4 flex'>
                        <p className='text-emerald-950 lg:text-4xl md:text-3xl text-xl font-extrabold md:w-80 lg:w-96 font-Gilroy'>Get started in quick and easy steps</p>
                        <p className='text-gray-500 text-sm leading-tight lg:text-xl md:text-lg font-normal md:leading-relaxed lg:leading-9  md:w-80 lg:w-96 font-Lato'>Fast track your investments progress, get started with us</p>
                        </div>
                        <Link to='/register' className='w-36 h-12 px-2.5 py-4 bg-sky-300 rounded-3xl justify-center items-center gap-1 inline-flex'>
                            <span className='text-emerald-950 text-xs md:text-sm font-bold leading-tight md:leading-normal'>Create Account</span>
                        </Link>
                    </div>
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-2  '>
                        <StepItem Icon={homeIcon} Title='Create an Account' Note={CreateAccount}/>
                        <StepItem Icon={Wallet} Title='Fund Wallet' Note={FundWallet}/>
                        <StepItem Icon={rocket} Title='Invest' Note={Invest}/>
                        <StepItem Icon={trendUp} Title='Earn' Note={Earn}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Steps;