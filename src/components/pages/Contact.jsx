import React from 'react'
import {Link} from 'react-router-dom'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className='flex w-screen relative'>
      <div className='lg:w-1/2 bg-opacity-30 bg-purple-800'>
       
       
      </div>
      <div className="left w-16 cursor-pointer rounded-full flex items-center justify-center h-16 bg-white absolute top-0 left-1/2 lg:-translate-x-1/2 ">

      <Link to="/comingsoon" >
        <FontAwesomeIcon icon={faArrowRight} className="text-blue-700 hover:scale-150" />
       </Link>
      </div>
      <div className='lg:w-1/2 h-auto '>
        
        <form className='bg-[#190838] py-[5rem] px-12'>
          <div className='flex justify-center text-center py-8'><h3 className="text-3xl text-white">Hey, we are still in the works,
            <span className="block">but you can send us a message!</span></h3>
          </div>
<div className="mb-6">
<label for="text" className="block mb-2 text-sm font-medium text-white">First name</label>
<input type="text" id="text" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-6" placeholder="Enter Your First Name" required="" />
</div>
<div className="mb-6">
<label for="text" className="block mb-2 text-sm font-medium text-white">Last name</label>
<input type="text" id="text" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-6" placeholder="Enter Your Last Name" required="" />
</div>
<div className="mb-6">
<label for="email" className="block mb-2 text-sm font-medium text-white">Email address</label>
<input type="email" id="email" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-6" placeholder="Enter Your Emain Address" required="" />
</div>
<div>
  
<label for="message" class="block mb-2 text-sm font-medium text-white">Tell us what you need help with:</label>
<textarea id="message" rows="4" class="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-6" placeholder='Enter a Topic, Like "Channel Problem..."' / >

</div>
<button type="submit" className="my-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-10 py-5 rounded-full hover:cursor-pointer uppercase ">Send Now</button>
</form>

      </div>
    </div>
  )
}

export default Contact