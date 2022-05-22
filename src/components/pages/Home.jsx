import React from 'react'

function Home() {
  return (
    <section className='home  w-screen text-center px-10 pb-24'>
        <div className="pt-10">
        <h1 className='uppercase text-white text-4xl font-bold leading-10'>something awesome is <span className='block'>coming soon</span></h1>
        <h5 className='text-white my-4'>Your all-in-one affliate marketing tracking software <span className="font-bold">track, automate </span> and <span className='block'><span className="font-bold">optimize </span> your campaigns.</span></h5>

        <section className='my-8 flex items-center justify-center gap-4 flex-wrap'>
            <div className='items-center justify-center bg-white w-20 flex-col flex h-24 rounded-md '>
                <div className='text-3xl font-bold'>7</div>
            <div className='text-sm'>Days</div>
            </div>
            <div className='items-center justify-center bg-white w-20 flex-col flex h-24 rounded-md '>
            <div className='text-3xl font-bold'>24</div>
            <div className='text-sm'>Hours</div>
            </div>
            <div className='items-center justify-center bg-white w-20 flex-col flex h-24 rounded-md '>
            <div className='text-3xl font-bold'>54</div>
            <div className='text-sm'>Minutes</div>
            </div>
            <div className='items-center justify-center bg-white w-20 flex-col flex h-24 rounded-md '>
            <div className='text-3xl font-bold'>11</div>
            <div className='text-sm'>Seconds</div>
            </div>

        </section>




        <form className='my-8 flex items-center justify-center gap- flex-wrap'>
            <div className='items-center justify-center gap-4  flex flex-wrap rounded-md '>
               <div className='block after:bg-transparent border-0 justify-start '>
                
                   <input type="text"  className='border-0 bg-transparent border-b-2 placeholder:text-xs' placeholder='First Name...' />
               </div>
               <div className='block bg-transparent border-0 justify-start'>
                 
                   <input type="text" name="" id="" className='border-0 bg-transparent border-b-2 placeholder:text-xs' placeholder='Last Name...'/>
               </div>
            </div>

        </form>

<section className='items-center flex justify-center'>
    <div className="lg:rounded-full border-0 flex flex-wrap lg:flex-nowrap justify-between bg-white outline-0">
        <input type="email" name="" id="" placeholder='Enter your email address' className='px-6 bg-transparent border-0 lg:w-full w-full  outline-0'/>
        <input type="button" value="Join our waiting list" className='lg:rounded-full uppercase hover:cursor-pointer bg-blue-700 border-0 text-white py-4 px-7 text-xs lg:w-3/4  outline-0 w-full' />
    </div>
</section>


        </div>
    </section>
  )
}

export default Home