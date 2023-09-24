import React, {useState, useEffect} from 'react';
import Menu from '../assets/Icons/menu2.png';
import Logo from '../assets/Illustras/Logo.png'
import {Link, useLocation} from 'react-router-dom';
import {BiX} from 'react-icons/bi'

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
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveNavItem(currentPath);
      }, [location.pathname]);
    return (
        <div className={`z-10  w-full  top-0 sticky ${isOnBoardPage ? 'md:hidden' : 'block'} ${darkColorScheme ? 'bg-PB900' : 'bg-white'} md:border-b `}>
           <div className='flex justify-between items-center py-3 px-4 md:px-5 lg:px-12'>
            <a href="/" className='flex items-center gap-2 justify-center '>
                <img src={Logo} alt="logo" className='md:w-10 w-8' />
                <h1 className='font-bold text-2xl md:text-2xl lg:text-3xl tracking-tight text-cyan-500'>f<span className='text-orange-400'>o</span>lda</h1>
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
            <div className={`w-10 h-10 p-2 rounded-full border border-teal-100 justify-center items-center gap-2.5 flex md:hidden 
             ${
              isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
            }`}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
           {isToggleOpen ? <BiX className='w-10 h-10 text-cyan-500'/> :  <img src={Menu} alt="menu" className=' relative' />}
            </div>
            <ul
              className={`absolute top-0 left-0 z-[-1] h-screen w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm "
                  : "invisible opacity-0"
              }`} 
            >
              {NavItems.map((navItem) => (
                <li className='flex items-stretch'>
                  <Link to={navItem.path} className='flex items-center gap-2 py-4 text-emerald-950 transition-colors duration-300 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none'>{navItem.name}</Link>
                </li>
              ))}
              <div className='flex flex-col gap-3'>
              <button className='flex justify-center items-center px-3 py-2.5 rounded-full gap-1 w-full border border-gray-300  bg-Gray100 ' disabled ><a href="" className='lg:text-sm md:text-sm ' aria-disabled >Log in</a></button>
              <button className='flex justify-center items-center px-3 py-2.5 rounded-full gap-1 w-full bg-PB400'><a href="/register" className='lg:text-sm md:text-sm'>Create Account</a></button>
              </div>
            </ul>
            </div> 
        </div>
    );
}

export default NavBar;