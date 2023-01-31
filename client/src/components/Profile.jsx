import React from 'react'
import Nav from './Nav'
import Videos from './Videos'

function Profile() {
  return (
    <section>
        <div>
            <Nav />
        </div>
        <section className='w-90 main-stream-profile'>
            <div className='cover-profile-img mb-5'>
                <img src="https://samyam.netlify.app/assets/3dCarArt.fe1befad.jpg" alt="" />
            </div>
            <div className='work-flex'>
                <div className='flex main-profile gap-5'>
                    <img src="" alt="" />
                    <div>
                        <h1 className='text-[#fff] font-bold text-lg mt-2'>SamyamTV</h1>
                        <p className='text-[#fff] text-sm font-semibold'>@SamBoii</p>
                        <p className='text-[#fff] text-sm font-semibold'>1 mil Followers</p>
                    </div>
                </div>
                <div>
                    <button className='subscribe-btn'>Follow</button>
                </div>
            </div>
            <div className='border-line mt-6'></div>
            <div>
                <h2 className='text-[#fff] mt-4 text-xl font-bold'>Shorts</h2>
                <div className='shorts flex mt-2 gap-2'>
                    <div className='el-shorts'>
                        <img src="https://samyam.netlify.app/assets/shootingstar.aecb5cf2.jpg" alt="" />
                        <div>
                            <h2 className='text-base font-bold text-[#fff]'>Become pro</h2>
                            <p className='text-[#fff] text-small font-bold'>110K views</p>
                        </div>
                    </div>
                    <div className='el-shorts'>
                        <img src="https://samyam.netlify.app/assets/shootingstar.aecb5cf2.jpg" alt="" />
                        <div>
                            <h2 className='text-base font-bold text-[#fff]'>Become pro</h2>
                            <p className='text-[#fff] text-small font-bold'>110K views</p>
                        </div>
                    </div>
                    <div className='el-shorts'>
                        <img src="https://samyam.netlify.app/assets/shootingstar.aecb5cf2.jpg" alt="" />
                        <div>
                            <h2 className='text-base font-bold text-[#fff]'>Become pro</h2>
                            <p className='text-[#fff] text-small font-bold'>110K views</p>
                        </div>
                    </div>
                    <div className='el-shorts'>
                        <img src="https://samyam.netlify.app/assets/shootingstar.aecb5cf2.jpg" alt="" />
                        <div>
                            <h2 className='text-base font-bold text-[#fff]'>Become pro</h2>
                            <p className='text-[#fff] text-small font-bold'>110K views</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-line mt-6'></div>
            <div className='mt-4 mb-4'>
                <h2 className='text-[#fff] text-xl font-bold'>Videos</h2>
                <Videos />
            </div>
        </section>
    </section>
  )
}

export default Profile