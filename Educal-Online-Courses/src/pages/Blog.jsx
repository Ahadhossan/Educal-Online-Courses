import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { AiTwotoneCalendar } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export const Blog = () => {
  return (
    <>
      <section className='courses'>
        <div className='w-4/5 m-auto'>
          <div className='py-12 text-center heading'>
            <h1 className='text-3xl font-semibold text-black'>
              We Share <br />
              Our Thoughts On Design
            </h1>
            <span className='block mt-2 text-sm'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-5 md:grid-cols-1'>
            {courses.slice(0, 3).map((item) => (
              <div className='bg-white rounded-lg box shadow-shadow1'>
                <div className='relative h-40 overflow-hidden rounded-t-lg images w-ful'>
                  <img src={item.cover} alt='' className='object-cover w-full h-full transition duration-300 ease-in-out delay-150 rounded-t-lg cursor-pointer hover:scale-125' />
                </div>
                <div className='p-3 text'>
                  <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>Lifestyle</span>
                  <NavLink to='/single-blog'>
                    <h3 className='h-10 my-4 font-medium text-black'>{item.title}</h3>
                  </NavLink>
                  <div className='flex items-center justify-between user'>
                    <div className='flex items-center'>
                      <img className='object-cover rounded-full w-7 h-7 shadow-shadow1' src='https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g' alt='' />
                      <span className='text-[14px] ml-2'> Ahad</span>
                    </div>
                    <div className='flex items-center'>
                      <AiTwotoneCalendar />
                      <span className='text-[14px] ml-2'> Mar 06, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
