import React from "react"
import heroImg from "../components/assets/images/hero.png"
import heroImgback from "../components/assets/images/hero-shape-purple.png"
import { FiSearch } from "react-icons/fi"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa"
import { About } from "./About"
import { Courses } from "./Courses"
import { Instructor } from "./Instructor"
import { Blog } from "./Blog"

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Instructor />
      <Blog />
    </>
  )
}
export const HomeContent = () => {
  return (
    <>
      <section className='bg-secondary py-10 h-[92vh] md:h-full'>
        <div className='container'>
          <div className='flex items-center justify-center md:flex-col'>
            <div className='w-1/2 text-black left md:w-full'>
              <h1 className='text-4xl font-semibold leading-tight text-black'>
                Launch your <br /> Own online learning <br /> Platform
              </h1>
              <h3 className='mt-3 text-lg'>Unlimited access to all 60+ instructors.</h3>
              <span className='text-[14px]'>2 passes (with access to all classes) for $240</span>

              <div className='relative mt-5 text-gray-600 focus-within:text-gray-400'>
                <input type='search' className='py-3 pl-10 text-sm bg-white rounded-md focus:outline-none ' placeholder='Search...' autocomplete='off' />
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <button type='submit' className='p-1 focus:outline-none focus:shadow-outline'>
                    <FiSearch />
                  </button>
                </span>
              </div>
              <span className='text-[14px]'>You`re guaranteed to find something that`s right for you.</span>
            </div>
            <div className='relative w-1/2 right md:w-full'>
              <div className='relative images'>
                <img src={heroImgback} alt='' className='absolute top-32 left-10 w-96 md:left-10' />
                <div className='img h-[85vh] w-full'>
                  <img src={heroImg} alt='' className='relative z-20 object-contain w-full h-full' />
                </div>
              </div>
              <div className='content'>
                <button className='absolute left-0 z-30 flex items-center p-2 bg-white rounded-md shadow-md top-56'>
                  <div className='flex items-center justify-center w-10 h-10 text-white bg-orange-400 rounded-full icon'>
                    <BsFillLightningChargeFill size={25} />
                  </div>
                  <div className='flex flex-col items-start px-3 text'>
                    <span className='text-sm text-black'>Congrstulations</span>
                    <span className='text-[12px]'>Your admission completed</span>
                  </div>
                </button>
                <button className='absolute z-30 flex items-center p-2 pr-8 bg-white rounded-md shadow-md bottom-32 left-48'>
                  <div className='flex items-center justify-center w-10 h-10 text-white bg-blue-400 rounded-full icon'>
                    <FaGraduationCap size={25} />
                  </div>
                  <div className='flex flex-col items-start px-4 text'>
                    <span className='text-sm text-black'>450K</span>
                    <span className='text-[12px]'>Assisted Student</span>
                  </div>
                </button>
                <button className='absolute z-30 flex items-center p-2 bg-white rounded-md shadow-md top-56 -right-32 md:top-96 md:-right-5'>
                  <div className='flex items-center justify-center w-10 h-10 text-white bg-orange-400 rounded-full icon'>
                    <FaUsers size={25} />
                  </div>
                  <div className='flex flex-col items-start px-5 text'>
                    <span className='text-sm text-black'>User Experience Class</span>
                    <span className='text-[12px]'>Tomorrow is our</span>
                  </div>
                </button>
                <button className='absolute z-30 flex items-center p-2 bg-white rounded-md shadow-md top-32 right-32'>
                  <div className='flex items-center justify-center w-10 h-10 text-white bg-indigo-400 rounded-full icon'>
                    <FaBookReader size={25} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
