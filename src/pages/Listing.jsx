import React from 'react';
import NavBar from '../Components/NavBar'
import PropertyImage from '../assets/Illustras/Property.jpg'

function Listing(props) {
    return (
        <div>
            <NavBar/>
            <div className="flex flex-col h-screen bg-white">
  <img
    src={PropertyImage}
    alt="Property Image"
    className="object-cover w-full h-64"
    loading='lazy'
  />

  <div className="flex items-center justify-center flex-1">
    <div className="max-w-xl px-4 py-8 mx-auto text-center">
      <h1 className="text-2xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
      Property Listings Coming Soon !!!
      </h1>

      <p className="mt-4 text-gray-500">
      At Folda, we're committed to providing you with the best property options. Our team is tirelessly working on compiling a list of properties that cater to various preferences.
      </p>

      <a
        href="/"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-emerald-950 bg-PB400 rounded-3xl"
      >
        Go Back Home
      </a>
    </div>
  </div>
</div>
        </div>
    );
}

export default Listing;