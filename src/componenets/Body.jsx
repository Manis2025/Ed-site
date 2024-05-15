import React from 'react'
import logo from '../images/OBJECTS.png';
import logo1 from '../images/Vector.png';
import logo2 from '../images/exam 1.png';
import logo3 from '../images/certification 1.png';
import logo4 from '../images/online-test 1.png';

function Body() {
    return (
        <>
            <div className='relative  w-full'> 
                <section className=' lg:flex w-full bg-orange-100 h-screen'>
                    <div>
                        <div className='text-start p-24'>
                            <p className='text-font-bold text-6xl font-roboto'>The <span className='text-orange-500 text-font-bold'>Smart</span><br /> Choice For <span className='text-orange-500 text-font-bold'>Future</span></p>
                            <p className='font-roboto text-gray-600'>Elearn is a global training provider based across the UK that specializes in accredited and bespoke trainig courses. We crush the...</p>
                        </div>


                        <div className="relative w-full max-w-md ms-24 rounded-full ">

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <img src={logo1} alt="Search" className="h-5 w-5" />
                            </div>

                            <input
                                type="text"
                                placeholder="       Search for a location..."
                                className="w-full px-4 py-6 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 placeholder-violet-950 text-lg font-bold"
                            />
                            <button className="absolute inset-y-1 right-1 px-4 py-2 bg-violet-950 text-white rounded-full hover:bg-purple-700 text-2xl font-bold">
                                Continue
                            </button>
                        </div>

                    </div>


                    <div className=' p-1 flex items-center justify-end'>
                        <img src={logo} alt="" />
                    </div>


                </section>

                {/* new div */}
                <div className='bg-purple-900 lg:flex absolute left-20 right-20 -bottom-1/4 rounded-2xl mt-5'>

                    <div className='flex items-center p-5 m-5'>
                        <img src={logo2}   className="border border-purple-900 rounded-2xl p-4 bg-purple-700" alt="" />
                        <div className='  font-roboto text-start p-2 ms-2'>
                        <p className='text-font-extrabold  text-white text-2xl'>Learn The Latest Skills</p>
                        <p className='text-gray-400 text-font-bold mt-4'>Contary to popular belief , Lorem Ipsum is not a simply random text. It roots in BC, making it over 2000 years old.</p>
                        </div>
                    </div>

                    <div className='flex  items-center  p-5 m-5'>
                        <img src={logo3} className="border border-purple-900 rounded-2xl p-4 bg-purple-700" alt="" />
                        <div  className=' text font-roboto text-start p-2  ms-2'>
                        <p className='text-font-extrabold  text-white text-2xl'>Get Ready For  a career </p>
                        <p className='text-gray-400 text-font-bold mt-4'>Contary to popular belief , Lorem Ipsum is not a simply random text. It roots in BC, making it over 2000 years old.</p></div>
                        </div>
                    <div className='flex items-center  p-5 m-4'>
                        <img src={logo4} className="border border-purple-900 rounded-2xl p-4 bg-purple-700" alt="" />
                        <div  className=' text font-roboto text-start p-2 ms-2'>
                        <p className='text-font-extrabold  text-white text-2xl'>Earn a certificate</p>
                        <p className='text-gray-400 text-font-bold mt-4'>Contary to popular belief , Lorem Ipsum is not a simply random text. It roots in BC, making it over 2000 years old.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body