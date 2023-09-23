import Rise from '../assets/Illustras/HighRise.png';
import House from '../assets/Illustras/House.png';
import sliderLeft from '../assets/Icons/slider-left.png';
import sliderRight from '../assets/Icons/slider-right.png';
import { useState, useEffect } from 'react';
function RegisterSideBar({autoplayInterval}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const Slides = [
        {
            content: (
                <div className=" px-16 py-8 bg-[#D1EEF4] rounded-md ">
                <img src={Rise} alt="rise Image" className='object-contain w-[10rem] mx-auto p-4.5 '/>
                </div>
            ),
            Icon : sliderLeft
        },
        {
            content: (
                <div className=" px-16 py-8 bg-[#D1EEF4] rounded-md ">
                <img src={House} alt="House" className='cover w-[10rem] h-[10rem] relative top-8 '/>
                </div>
            ),
            Icon: sliderRight
        }
    ];
    useEffect(() => {
        const autoplayTimer = setInterval(() => {
          goToNextSlide();
        }, autoplayInterval || 3000);
    
        return () => {
          clearInterval(autoplayTimer);
        };
      }, [currentSlide, autoplayInterval]);
    
      const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === Slides.length - 1 ? 0 : prevSlide + 1));
      };
    
      const goToSlide = (index) => {
        setCurrentSlide(index);
      };
    return (
        <div className=" w-1/3 left-4 top-4 h-[512px] xl:h-[800px] bg-[#E8F7FA] lg:rounded-md items-center lg:flex lg:flex-col gap-2.5 hidden justify-end ">
            <div className='items-center justify-center absolute top-16'>
                {
                    Slides.map((slide, index) => (
                        <section
                         key={index}
                         className={` ${
                            index === currentSlide ? 'opacity-100' : 'hidden'
                          }`}
                        >
                            {slide.content}
                        </section>
                        
                    ))
                }
                </div>
            <div className='flex flex-col gap-[52px] absolute px-12'>
                <div className='flex flex-col items-start gap-[6px]'>
                <h1 className='text-2xl font-bold tracking-tighter text-PB800'>Experience Real Growth in Real Estate</h1>
                <p className=' text-md font-light text-PB800'>Providing accessibility in real estate <br/> investment</p>
                </div>
                <div className='mb-8'>
                    {
                        Slides.map((_, index)=> (
                            <img
                                key={index}
                                src={Slides[index].Icon}
                                onClick={() => goToSlide(index)}
                                alt='Slide'
                                className={`mx-1 h-4 cursor-pointer ${
                                    index === currentSlide ? 'opacity-100' : 'hidden'
                                  }`}
                            />
                        ))
                    }
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default RegisterSideBar;