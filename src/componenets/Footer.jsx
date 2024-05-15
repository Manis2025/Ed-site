import React from 'react';
import logo from '../images/Group 328.png';

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-black-300 py-8 px-8 mt-4">
      <div className="container mx-auto lg:flex flex-col md:flex-row sm:flex-col sm:items-center justify-between">
        <div className='w-full sm:w-[50%] md:w-[25%] mb-6 sm:mb-8 lg:text-start sm:text-center' >
            <img src={logo} alt="" className='' />
            <p className='font-roboto text-start'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ex sed. Similique recusandae illum fuga voluptatibus. Harum, nam inventore, optio aperiam amet repellendus aliquid at dolore cum saepe provident porro?</p>
        </div>
        {/* Column 1 */}
        <div className="mb-6 sm:mb-8 md:mb-0 sm:w-[50%] md:w-auto lg:text-start sm:text-center">
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul >
            <li className='py-3'>About us </li>
            <li className='py-3'>How to work?</li>
            <li className='py-3'>Popular Course</li>
            <li className='py-3'>Service</li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div className="mb-6 sm:mb-8 md:mb-0 sm:w-[50%] md:w-auto lg:text-start sm:text-center">
          <h2 className="text-xl font-bold mb-4">Courses</h2>
          <ul >
            <li className='py-3'> Categories </li>
            <li className='py-3'>Offline Course</li>
            <li className='py-3'>Video Course</li>
          </ul>
        </div>
        
        {/* Column 3 */}
        <div className="mb-6 sm:mb-8 md:mb-0 sm:w-[50%] md:w-auto lg:text-start sm:text-center">
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <ul >
            <li className='py-3'>FAQ </li>
            <li className='py-3'>Help Center</li>
            <li className='py-3'>Career</li>
            <li className='py-3'>Privacy</li>
          </ul>
        </div>
        
        {/* Column 4 */}
        <div className="mb-6 sm:mb-8 md:mb-0 sm:w-[50%] md:w-auto lg:text-start sm:text-center">
          <h2 className="text-xl font-bold mb-4">Contact info</h2>
          <ul >
            <li className='py-3'>+0913-705-3875</li>
            <li className='py-3'>abc@gmail.com</li>
            <li className='py-3'>4804 skinner hollow road <br/>,deep creek</li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-400 p-0" /> 

      <div className='items-center font-semibold font-roboto lg:text-start sm:text-center'>
        <h1>BookStore All Right Reserved, 2022</h1>
      </div>
    </footer>
  );
};

export default Footer;
