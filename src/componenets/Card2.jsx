import React from 'react'
import logo from '../images/card2.1.png';
import logo1 from '../images/card2.2.png';
import logo2 from '../images/card2.3.png';
import logo3 from '../images/lin.png';
import logo4 from '../images/Instagram.png';


function Card2() {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-2xl">Our Tracks</h1>
          <p className="text-SuvaGrey text-xs">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="min-h-[70vh] flex flex-col lg:flex-row md:flex-row justify-center p-8 items-center gap-5">
          <div className="lg:h-[42vh] lg:w-[20vw] shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] p-3 rounded-lg flex flex-col gap-2 ">
            <div className="">
              <img src={logo} className="" />
            </div>
            <div>
              <h1 className="text-black font-semibold">Matthew E. McNatt</h1>
              <p className=" text-SuvaGrey text-xs">
                Professor @George Brown College
              </p>
            </div>
            <div>
              <p className="text-SuvaGrey text-xs">
                Ut enim ad minim veniam, quis nost exercitation ullamco laboris
                nisi ut allquip ex commodo.
              </p>
            </div>
            <div className="flex  justify-between items-center gap-4 mb-2">
              <div>
                <h3 className="text-Pumpkin text-xs font-semibold">Engineering physics</h3>
              </div>
              <div className="flex items-center gap-4">
                <img src={logo3} className="w-4"/>
                <img src={logo4} className="w-4"/>
              </div>
            </div>
          </div>
          <div className="lg:h-[42vh] lg:w-[20vw] shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] p-3 rounded-lg flex flex-col gap-2 ">
            <div className="">
              <img src={logo1} className="" />
            </div>
            <div>
              <h1 className="text-black font-semibold">Matthew E. McNatt</h1>
              <p className=" text-SuvaGrey text-xs">
                Professor @George Brown College
              </p>
            </div>
            <div>
              <p className="text-SuvaGrey text-xs">
                Ut enim ad minim veniam, quis nost exercitation ullamco laboris
                nisi ut allquip ex commodo.
              </p>
            </div>
            <div className="flex  justify-between items-center gap-4 mb-2">
              <div>
                <h3 className="text-Pumpkin text-xs font-semibold">Engineering physics</h3>
              </div>
              <div className="flex items-center gap-4">
                <img src={logo3} className="w-4"/>
                <img src={logo4} className="w-4"/>
              </div>
            </div>
          </div>
          <div className="lg:h-[42vh] lg:w-[20vw] shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] p-3 rounded-lg flex flex-col gap-2 ">
            <div className="">
              <img src={logo2} className="" />
            </div>
            <div>
              <h1 className="text-black font-semibold">Matthew E. McNatt</h1>
              <p className=" text-SuvaGrey text-xs">
                Professor @George Brown College
              </p>
            </div>
            <div>
              <p className="text-SuvaGrey text-xs">
                Ut enim ad minim veniam, quis nost exercitation ullamco laboris
                nisi ut allquip ex commodo.
              </p>
            </div>
            <div className="flex  justify-between items-center gap-4 mb-2">
              <div>
                <h3 className="text-Pumpkin text-xs font-semibold">Engineering physics</h3>
              </div>
              <div className="flex items-center gap-4">
                <img src={logo3} className="w-4"/>
                <img src={logo4} className="w-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2