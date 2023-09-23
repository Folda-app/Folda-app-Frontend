import React, { useEffect, useState } from "react"
import Glide from "@glidejs/glide";
import TestimonialQuote from '../assets/Icons/TestimonialQuote.png';
import Justin from '../assets/Illustras/Justin.png';
import Pelumi from '../assets/Illustras/Pelumi.png';
import Olumide from '../assets/Illustras/Olumide.png'
const Testimonials = [
    {
        testimony: 'I started investing in Folda 8 months ago, and I was able to grow my investments 2x from investing in real estate',
        author: 'Pelumi Ambali',
        image: Pelumi,
    },
    {
        testimony: "I recently joined Folda and it's been an amazing journey. I've seen tremendous growth in my investments, and I couldn't be happier!",
        author: 'Justin Bella',
        image: Justin
    },
    {
        testimony: "Folda has been a game-changer for me. Within a short time, I've seen remarkable returns on my investments, thanks to their expert guidance.",
        author: 'Olumide Grey',
        image: Olumide,
    },
]

export default function CarouselTestimonial() {
    const [activeIndex, setActiveIndex] = useState(0);

  const indicators = ['', '', ''];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % indicators.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 2,
      animationDuration: 4000,
      // autoplay: 400,
      autoplay: true,
      rewind: true,
      perView: 1.5,
      gap: 24,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
       
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-08 overflow-hidden ">
        {/*    <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="py-4 ">
            {Testimonials.map((testimonial) => (
                
                <li className=" px-5 py-3  bg-white rounded-lg justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-11 inline-flex">
                  <img src={TestimonialQuote} alt="quote" className="relative w-8 h-8" />
                  <div className="flex-col justify-start items-start gap-6 flex">
                    <p className="w-full text-gray-500 text-sm font-medium leading-relaxed ">{testimonial.testimony}</p>
                    <div className="justify-start items-center gap-3 inline-flex">
                      <img className="w-5 h-5 rounded-full border border-amber-600" src={testimonial.image} />
                      <div className="w-full text-emerald-950 text-xs font-medium leading-tight">{testimonial.author}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="mt-4 flex w-full items-center justify-center gap-2"
        >
            {indicators.map((indicator, index) => ( 
            <div
              key={index}
              className={`h-1.5 rounded-full ${
                index === activeIndex
                  ? 'bg-yellow-950 w-6'
                  : 'bg-orange-200 w-3'
              }`}
            >
              {indicator}
            </div>
          ))}
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}
