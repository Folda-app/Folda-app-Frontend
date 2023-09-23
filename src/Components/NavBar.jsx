import React, {useState, useEffect} from 'react';
import Menu from '../assets/Icons/menu2.png';
import Logo from '../assets/Illustras/Logo.png'
import {Link, useLocation} from 'react-router-dom';

function NavBar({isOnBoardPage, darkColorScheme, activeNav}) {
    const NavItems = [
        {name: 'Home', path: '/'},
        {name: 'Listing', path: '/listing'},
        {name: 'About', path:'/about'},
        {name: 'FAQs', path: '/faqs'},
        {name: 'Community', path: '/community'}
    ]
    const location = useLocation('');
    const [activeNavItem, setActiveNavItem] = useState('');

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveNavItem(currentPath);
      }, [location.pathname]);
    return (
        <div className={`z-10  w-full  top-0 sticky ${isOnBoardPage ? 'md:hidden' : 'block'} ${darkColorScheme ? 'bg-PB900' : 'bg-white'} md:border-b `}>
           <div className='flex justify-between items-center py-3 px-4 md:px-5 lg:px-12'>
            <a href="/" className='flex items-center gap-2 justify-center '>
                <img src={Logo} alt="logo" className='md:w-10 w-8' />
                <h1 className='font-extrabold text-2xl md:text-2xl lg:text-3xl tracking-tight text-cyan-500'>F<span className='text-orange-400'>O</span>LDA</h1>
            </a>
            <div>
            <div className=' hidden md:flex '>
               <ul className='flex items-start p-0 lg:gap-8 md:gap-4'>
                {
                    NavItems.map((item, idx)=>{
                        // const isActive = activeNavItem === item;
                        return(
                            <li
                            key={idx}
                            className={`lg:text-sm md:text-xs text-Gray700 ${
                              item.path === activeNavItem ? 'text-PB500' : ''
                            }`}
                          >
                            <Link to={item.path} className="hover:text-PB500">
                              {item.name}
                            </Link>
                          </li> 
                        )
                    })
                }
                </ul>
            </div>
            </div>
            <div className='md:flex items-center p-0 gap-4 lg:min-w-[256px] md:min-w-[256px]  hidden  '>
                <button className='flex justify-center items-center px-3 py-2.5 rounded-full gap-1 w-full  bg-Gray100'><a href="login" className='lg:text-sm md:text-sm'>Log in</a></button>
                <button className='flex justify-center items-center px-3 py-2.5 rounded-full gap-1 w-full bg-PB400'><a href="/register" className='lg:text-sm md:text-sm'>Create Account</a></button>
            </div>
            <div className='w-10 h-10 p-2 rounded-full border border-teal-100 justify-center items-center gap-2.5 flex md:hidden'>
            <img src={Menu} alt="menu" className=' relative' />
            </div>
            </div> 
        </div>
    );
}

export default NavBar;