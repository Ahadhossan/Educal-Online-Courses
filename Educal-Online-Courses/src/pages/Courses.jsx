import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { FaBook } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const Courses = () => {
  return (
    <>
      <section className='courses bg-[#F3F4F8] py-16 '>
        <div className='w-4/5 m-auto'>
          <div className='mb-16 heading'>
            <h1 className='text-3xl font-semibold text-black'>
              Find The Right <br />
              Online Course For You
            </h1>
            <span className='block mt-2 text-sm'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
            {courses.map((item) => (
              <div className='bg-white rounded-lg box shadow-shadow1'>
                <div className='relative h-40 overflow-hidden rounded-t-lg images w-ful'>
                  <img src={item.cover} alt='' className='object-cover w-full h-full transition duration-300 ease-in-out delay-150 rounded-t-lg cursor-pointer hover:scale-125' />
                  <div className='absolute top-0 flex gap-4 m-3 categ'>
                    <span className='text-[14px] bg-blue-700 p-1 px-3 text-white rounded-[5px] shadow-md'>Finance</span>
                    <span className='text-[14px] bg-pink-700 p-1 px-3 text-white rounded-[5px] shadow-md'>Lifestyle</span>
                  </div>
                </div>
                <div className='p-3 text'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <FaBook />
                      <span className='text-[14px] ml-2'> 10 lessons</span>
                    </div>
                    <div className='flex items-center'>
                      <AiFillStar className='text-orange-500' />
                      <span className='text-[14px] ml-2'> 4.50(2)</span>
                    </div>
                  </div>
                  <h3 className='h-10 my-4 font-medium text-black'>{item.title}</h3>
                  <div className='flex items-center user'>
                    <img className='rounded-full' src='https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g' alt='' />
                    <span className='text-[14px] ml-2'> Ahad</span>
                  </div>
                </div>
                <div to='/' className='flex items-center justify-between p-3 border-t border-gray-200'>
                  <span className='text-sm text-primary'>Free</span>
                  <NavLink className='text-[14px] ml-2 flex items-center'>
                    Know Details <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
