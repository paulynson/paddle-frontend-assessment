import React from 'react'

function Contact() {
  return (
    <div className='flex'>
      <div></div>
      <div>
        
<form>
<div className="mb-6">
<label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
<input type="text" id="text" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your First Name" required="" />
</div>
<div className="mb-6">
<label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
<input type="text" id="text" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Last Name" required="" />
</div>
<div className="mb-6">
<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
<input type="email" id="email" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Emain Address" required="" />
</div>
<div>
  
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tell us what you need help with:</label>
<textarea id="message" rows="4" class="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

</div>
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

      </div>
    </div>
  )
}

export default Contact