import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import design from '../../assets/design.png'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


function About() {
  return (
    <div className='home w-screen'>
      <section className=' text-center lg:h-[500px] h-auto py-12 lg:relative box-border items-center '>
        
<div className='z-50 flex flex-col lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
  <div className='uppercase lg:-ml-[28rem] flex justify-center items-center py-6 gap-2 z-50'>
  <div className='w-8 h-[1px] bg-white z-50'></div>
  <p className='text-white z-50'>About us</p>
  </div>
 
<div className="flex justify-center z-50">
<h1 className='text-6xl text-white my-6 pl-6 text-left z-50'>Built for Saas
<span className='lg:block'>and E-commerce</span></h1>
</div>
</div>
<div className='px-4'>
  <p className='text-white self-baseline lg:ml-[60%] text-center lg:w-[27rem] lg:text-left lg:absolute lg:bottom-0'> Our tools are easy to set up and use with a user
  <span className="lg:block">friendly dashboard that enables you to set up, </span>
  <span className="lg:block">lunch, automate and manage multi-affliate </span>
  <span className="lg:block">campaign in  minutes </span>
  </p>
</div>
<div className='box-content h-full w-[56%] z-0 bg-white absolute left-0 top-0 bg-opacity-10 shadow-md  blur-[2px]'>

        </div>
      </section>
      <section className='flex justify-center lg:py-32 py-8 text-white  px-4'>
        <h3 className='lg:text-5xl sm:text-2xl leading-16 sm:text-center lg:text-left'>
        Metricks was developed because just like
<span className='lg:block'>you, we needed a product that could give</span>
<span className='lg:block'>us good value </span>

        </h3>
      </section>
      <section className='lg:py-32 text-center ' >
<div className="flex flex-wrap px-4 sm:text-center">
<div className='lg:px-40  relative lg:h-[400px] sm:h-auto pt-24'>
  <div> 
    <div className='uppercase flex justify-start items-center gap-2 w-auto'>
  <div className='w-8 h-[1px] bg-white z-50'></div>
  <p className='text-white z-50'>Why Us?</p>
  </div>
  <div className='text-white mt-6 lg:text-left text-center'>We pride ourselves in our ability to innovate and 
<span className="lg:block">create world-class tools that provide reliable and</span> 
<span className="lg:block">efficient touchpoints between advertisers and</span> 
<span className="lg:block">afflilates</span>
</div>
  </div>
<div className='lg:absolute lg:bottom-0 my-4 flex justify-center'>
  <img src={design} alt="design" className='w-[10rem] items-center' />
</div>
</div>
<div>
  <div className='h-full  lg:w-[48vw] lg:bg-slate-400 lg:bg-opacity-30 py-6 lg:px-24 px-4 pt-24'>
<div className='bg-opacity-30'> 
    <div className='uppercase flex justify-start items-center gap-2'>
  <div className='w-8 h-[1px] bg-white z-50'></div>
  <p className='text-white z-50'>Why Us?</p>
  </div>
  <div className='text-white mt-6 lg:text-left text-center'>We pride ourselves in our ability to innovate and 
<span className="lg:block">create world-class tools that provide reliable and</span> 
<span className="lg:block">efficient touchpoints between advertisers and</span> 
<span className="lg:block">afflilates</span>
</div>
  </div>
  <div className='text-white mt-6 lg:text-left text-center'>We pride ourselves in our ability to innovate and 
<span className="lg:block">create world-class tools that provide reliable and</span> 
<span className="lg:block">efficient touchpoints between advertisers and</span> 
<span className="lg:block">afflilates</span>
</div>
</div>

</div>
</div>
      </section>

      <section className="lg:pb-12 pb-8">
      <div className='w-full bg-slate-400 bg-opacity-30 lg:px-24 p-4 py-16 text-white flex justify-start flex-col h-full'>
        <h3 className='text-4xl leading-10 mb-4'>Got a Question?</h3>
        <p className='leading-8'>See as Metricks can help your business grow with best affliate marketing tracking <span className="lg:block">software.</span></p>
        <Link to="/contact" className='text-pink-500 py-4'> Contact Us <FontAwesomeIcon icon={faArrowRight} /> </Link>
        </div>
      </section>
    </div>
  )
}

export default About