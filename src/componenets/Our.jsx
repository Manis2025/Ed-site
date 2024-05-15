import React from 'react'
import logo1 from '../images/casual-life-3d-idea-lamp 1 (1).png';
import logo2 from '../images/Group (1).png';

function Our() {
  return (
   <>
 <div class='flex flex-col items-center sm:flex-row mt-32 sm:mt-32 md:mt-32'> 
    <div class='ms-28 p-10'><img src={logo1} alt="" /></div>
    <div class='flex-1 sm:items-center justify-center my-20 font-roboto'> 
        <p class='font-bold text-3xl text-gray-900'>Our Tracks</p>
        <p class='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class='ms-28 p-10'><img src={logo2} alt="" /></div> 
</div>


   </>
  )
}

export default Our