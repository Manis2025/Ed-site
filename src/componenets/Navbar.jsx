import React from 'react'
import logo from '../images/Group 328.png';



function Navbar() {
  return (
    <>
    <div className='bg-orange-100 flex items-center justify-between px-4 py-2 m-0 p-0 '>
        <div className=' ms-28 p-10'><a href="#"><img  src={logo} alt="" /></a></div>
        <div className=' p-10 flex items-center justify-end space-x-4 font-semibold text-lg font-roboto '>
            <p className=''><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Courses </a></p>
            <p><a href="#">Our Service</a></p>
            <p><a href="#">Contact us</a></p>
            <button className="mb-3 bg-purple-900 text-white mt-6 p-4  font-bold w-[200px] rounded-3xl hover:text-black hover:bg-lime-500">Sign in</button>

        </div>
    </div>
    </>
  )
}

export default Navbar