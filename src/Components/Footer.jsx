import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Illustras/Logo.png'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';


function Footer(props) {
    const Products = [
        {name: 'Market'},
        {name: 'Terms & Condition'},
        {name: 'Affiliates'},
        {name: 'Service status'},
        {name: 'Legal'},
        {name: 'Partners'}
    ];

    const Company = [
        {name: 'About Us'},
        {name: 'Privacy Policy'},
        {name: 'Term of Use'},
        {name: 'FAQs'},
        {name: 'Disclaimer'},
        {name: 'Careers'}
    ];

    const Support = [
        {name: 'Help Center'},
        {name: 'FAQs'},
        {name: 'Glossary'}
    ]
    return (
        <div className='p-3 md:p-6 flex flex-col md:flex-row md:gap-20 lg:gap-28 justify-start xl:justify-center'>
            <div className='flex flex-col gap-4 py-4 md:py-0'>
                <div className='flex gap-2 items-center'>
                <img src={Logo} alt="logo" className='w-8 md:w-10' />
                <h1 className='text-emerald-950 text-2xl font-extrabold'>Folda</h1>
                </div>
                <div className='flex gap-2 text-gray-600 text-base md:text-md lg:text-lg'>
                    <Link to=''>
                        <BsFacebook className='h-6 w-6 hover:text-PB500'/>
                    </Link>

                    <Link to=''>
                        <BsTwitter className='h-6 w-6 hover:text-PB500'/>
                    </Link>

                    <Link to=''>
                        <BsInstagram className='h-6 w-6 hover:text-PB500'/>
                    </Link>
                    <h5 className='text-sm'>@foldaapp</h5>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 md:gap-20 lg:gap-28 gap-14 '>
                <div className='w-full flex-col justify-start items-start gap-4 md:gap-6 inline-flex'>
                    <div className="text-emerald-950 text-xl md:text-2xl font-extrabold">Products</div>
                    <ul className='flex-col justify-start items-start gap-2.5 flex'>
                        {
                            Products.map((item, index)=> {
                                return (
                                    <li
                                        key={index}
                                        className='text-gray-500 text-sm lg:text-md  font-medium leading-relaxed'
                                    >
                                        <Link to='' className='hover:text-PB500'> {item.name} </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='w-full flex-col justify-start items-start gap-4 md:gap-6 inline-flex'>
                    <div className="text-emerald-950 text-xl md:text-2xl font-extrabold">Company</div>
                    <ul className='flex-col justify-start items-start gap-2.5 flex'>
                        {
                            Company.map((item, index)=> {
                                return (
                                    <li
                                        key={index}
                                        className='text-gray-500 text-sm lg:text-md font-medium leading-relaxed'
                                    >
                                        <Link to='' className='hover:text-PB500'> {item.name} </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='w-full flex-col justify-start items-start gap-4 md:gap-6 inline-flex'>
                    <div className="text-emerald-950 text-xl md:text-2xl font-extrabold">Support</div>
                    <ul className='flex-col justify-start items-start gap-2.5 flex'>
                        {
                            Support.map((item, index)=> {
                                return (
                                    <li
                                        key={index}
                                        className='text-gray-500 text-sm lg:text-md font-medium leading-relaxed'
                                    >
                                        <Link to='' className='hover:text-PB500'> {item.name} </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;