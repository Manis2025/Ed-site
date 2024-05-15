import React from 'react'
import logo from '../images/obj.png';
import logo1 from '../images/hearts.png';
import logo2 from '../images/jigsaw.png';

function Body1() {
  return (
    <>
    
    <div className='bg-orange-100 lg:flex  '>
                    <div className=' p-1 flex items-center justify-start '>
                        <img src={logo} alt="" />
                    </div>

                    <div>
                        <div className='text-start text-font-extrabold p-24'>
                            <p className=' text-6xl font-roboto'>Premium <span className='text-orange-500 '>Learning</span><br /> Experience</p>
                        </div>
                        <div className='flex ps-24'>
                            <div><img src={logo1}   className="border border-purple-900 rounded-2xl p-4 bg-purple-900" alt="" /></div>
                            <div className='font-roboto text-start ms-3'>
                                <p className='text-extrzbold text-2xl text-black'>Easily Accessible</p>
                                <p className='text-gray-500 my-2'>Learning will be very comfortable with coutselab</p>
                            </div>

                        </div>
                        <div className='flex ps-24 mt-5'>
                            <div><img src={logo2}   className="border border-purple-900 rounded-2xl p-4 bg-purple-900" alt="" /></div>
                            <div className='font-roboto text-start ms-3'>
                                <p className='text-extrzbold text-2xl text-black'>Fun Learning expe</p>
                                <p className='text-gray-500 my-2'>Learning will be very comfortable with coutselab</p>
                            </div>
                        </div>

                    </div>
    </div>
    
    
    
    
    </>
  )
}

export default Body1