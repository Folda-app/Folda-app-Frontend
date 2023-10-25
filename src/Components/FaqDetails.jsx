import React from 'react';
import FaqsHeader from '../assets/Illustras/FaqsHeader.png';
import FaqsHeaderMobile from '../assets/Illustras/FaqsHeader2.png';

function FaqDetails(props) {
    return (
        <div className='items-center justify-center md:px-14 lg:px-22 px-4'>
            <img src={FaqsHeader} alt="Faqs Header" className='w-full md:pt-10 pb-12 hidden md:block object-contain' />
            <img src={FaqsHeaderMobile} alt="Faqs Header Mobile" className='w-full pt-5  md:hidden pb-8' />
            <div className="space-y-4 md:px-12 md:py-10">
  {/* <details className="group [&_summary::-webkit-details-marker]:hidden" >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">
        What does Folda do
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
      
    </p>
  </details> */}

  <details className="group ">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-t-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium font-lato">
        What is Folda?
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>
    <p className=" px-4 leading-relaxed text-gray-700 bg-gray-50 p-4 font-lato rounded-b-lg">
    Folda is a proptech company offering private and fractional real estate equity investment to africans globally. Whether you're residentin your home country or anywhere in the world, Folda is preferred for you.
    </p>

  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-t-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium font-lato">
        What do we do at Folda?
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className=" px-4 leading-relaxed text-gray-700 p-4 bg-gray-50 rounded-b-lg font-lato">
    At Folda, we leverage on in-depth research and strategic partnerships to create opportunities for you in the real estate market
    </p>
  </details>


  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-t-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">
        What are you actually investing in?
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p className="px-4 leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-b-lg">
    One of our aimns as a company, is to ensure that we help you make your dreams happen. Investing with Folda will give you access to a range of carefully selected income generating assets.
    </p>
  </details>

</div>
        </div>
    );
}

export default FaqDetails;