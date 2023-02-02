import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function VidDetail() {
  return (
    <section>
      <div>
        <Nav />
      </div>
      <div className='w-90'>
        <div className='main-videos-sd flex w-11/12 gap-6 mb-10'>
          {/* section 1 */}
          <div className='section-1'>
          <img src="https://samyam.netlify.app/assets/dawn1.9483bf4b.jpg" alt="" className='vidmain' />
            <div className='tags flex gap-2'>
              <p className='text-sm font-base text-[#47baef]'>#god of life</p>
              <p className='text-sm font-base text-[#47baef]'>#god of base</p>
            </div>
            <div className='title-of-the-vid mt-2'>
              <h1 className='font-bold text-[#fff] text-xl'>Heello World, Sam Here</h1>
            </div>
            <div className='channel-profs flex gap-3 mt-5'>
                <Link to={``}>
                  <img src="" alt="" />
                </Link>
                  <div className='text-sm font-bold text-[#fff] mt-1'>
                    <p>SamyamTV</p>
                    <p>14.5M followers </p>
                  </div>
            </div>
            <div className='vid-contexts mt-7'>
              <h2 className='font-bold text-sm text-[#fff]'>11B Views</h2>
              <div>
                <p className='font-bold text-sm text-[#fff]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ducimus blanditiis! Cupiditate, perspiciatis ullam aut quidem eos nihil dicta consequatur dolor quo corporis ex modi aliquid ad numquam quia voluptates?
                </p>
              </div>
            </div>
            <section className='comment-section mt-5'>
              <h2 className='font-bold text-[#fff] text-xl'>Comments</h2>
              <div className='mt-5 flex gap-5'>
                <img src="" alt="" className='comment-profile'/>
                <input type="text" name="" id="" placeholder='Comments*'/>
              </div>
            </section>
            <section className='user-comments mt-10'>
              <div className='flex gap-5 '>
                  <img src="" alt="" className='imgprofileimg'/>
                  <div className='user-comment-el'>
                    <h2 className='font-bold text-[#fff]'>@SamAl</h2>
                    <p className='font-semibold text-sm text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui aliquid, tempore ab facere reiciendis. Nemo cum veritatis impedit eum, placeat molestias distinctio similique. Rem perspiciatis maxime dignissimos atque beatae.</p>
                  </div>
              </div>
            </section>
          </div>
          {/* section 1 end */}
          {/* section 2 start */}
          <div className='section-2 w-6/12'>
            <div className='recommended-vidoes'>
              {/* videl1 */}
                <div className='re-vid-el flex gap-2 mb-3'>
                  <img src="https://samyam.netlify.app/assets/portisoroom.d1f242c7.png" alt="" />
                  <div className='my-3 w-12/12'>
                    <h2 className='font-bold text-sm text-[#fff] '>Hello Python gods </h2>
                    <p className='font-bold text-small text-[#fff]'>SamyamTV</p>
                    {/* <p className='font-bold text-small text-[#fff]'>115M views</p> */}
                  </div>
                </div>
                {/* videl1end */}
                {/* videl1 */}
                <div className='re-vid-el flex gap-2'>
                  <img src="https://samyam.netlify.app/assets/portisoroom.d1f242c7.png" alt="" />
                  <div className='my-3'>
                    <h2 className='font-bold text-sm text-[#fff] '>Hello Python </h2>
                    <p className='font-bold text-small text-[#fff]'>SamyamTV</p>
                    {/* <p className='font-bold text-small text-[#fff]'>115M views</p>   */}
                  </div>
                </div>
                {/* videl1end */}
            </div>
          </div>
          {/* section 2 end */}
        </div>
      </div>
    </section>
  )
}

export default VidDetail