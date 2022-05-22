import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import design from '../../assets/design.png'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


function About() {
  return (
    <div className='home'>
      <section className=' text-center h-[500px]  relative box-border items-center '>
        
<div className='z-50 flex flex-col mtrans'>
  <div className='uppercase lg:-ml-[28rem] flex justify-center items-center gap-2 z-50'>
  <div className='w-8 h-[1px] bg-white z-50'></div>
  <p className='text-white z-50'>About us</p>
  </div>
 
<div className="flex justify-center z-50">
<h1 className='text-6xl text-white my-6 pl-6 text-left z-50'>Built for Saas
<span className='block'>and E-commerce</span></h1>
</div>
</div>
<div>
  <p className='text-white self-baseline ml-[60%] w-[24rem] text-left absolute bottom-0'> Our tools are easy to set up and use with a user
  <span className="block">friendly dashboard that enables you to set up, </span>
  <span className="block">lunch, automate and manage multi-affliate </span>
  <span className="block">campaign in  minutes </span>
  </p>
</div>
<div className='box-content h-full w-[56%] z-0 bg-slate-400 absolute left-0 top-0 bg-opacity-30'>

        </div>
      </section>
      <section className='flex justify-center py-32 text-white'>
        <h3 className='text-left text-5xl leading-16'>
        Metricks was developed because just like
<span className='block'>you, we needed a product that could give</span>
<span className='block'>us good value </span>

        </h3>
      </section>
      <section className='py-32'>
<div className="flex">
<div className='px-40 relative h-[400px] pt-24'>
  <div> 
    <div className='uppercase flex justify-start items-center gap-2'>
  <div className='w-8 h-[1px] bg-white z-50'></div>
  <p className='text-white z-50'>Why Us?</p>
  </div>
  <div className='text-white mt-6'>We pride ourselves in our ability to innovate and 
<span className="block">create world-class tools that provide reliable and</span> 
<span className="block">efficient touchpoints between advertisers and</span> 
<span className="block">afflilates</span>
</div>
  </div>
<div className='absolute bottom-0'>
  <img src={design} alt="design" className='w-[10rem]' />
</div>
</div>
<div>
  <div className='h-full  w-[48vw] bg-slate-400 bg-opacity-30 px-24 pt-24'>
<div className='opacity-100'> 
    <div className='uppercase flex justify-start items-center gap-2'>
  <div className='w-8 h-[1px] bg-white z-50'></div>
  <p className='text-white z-50'>Why Us?</p>
  </div>
  <div className='text-white mt-6'>We pride ourselves in our ability to innovate and 
<span className="block">create world-class tools that provide reliable and</span> 
<span className="block">efficient touchpoints between advertisers and</span> 
<span className="block">afflilates</span>
</div>
  </div>
  <div className='text-white mt-6'>We pride ourselves in our ability to innovate and 
<span className="block">create world-class tools that provide reliable and</span> 
<span className="block">efficient touchpoints between advertisers and</span> 
<span className="block">afflilates</span>
</div>
</div>

</div>
</div>
      </section>

      <section className="pb-32">
      <div className='w-full bg-slate-400 bg-opacity-30 px-24 py-16 text-white flex justify-start flex-col h-full'>
        <h3 className='text-4xl leading-10 mb-4'>Got a Question?</h3>
        <p className='leading-8'>See as Metricks can help your business grow with best affliate marketing tracking <span className="block">software.</span></p>
        <Link to="/contact" className='text-pink-500'> Contact Us <FontAwesomeIcon icon={faArrowRight} /> </Link>
        </div>
      </section>
    </div>
  )
}

export default About