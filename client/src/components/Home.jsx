import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Videos from './Videos'

function Home() {
  return (
    <section>
        <div>
            <Nav />
        </div>
        <section className='main-stream w-90 '>
            <div className='tags flex gap-2'>
                <div className='tags-el'>
                    <p className='color-white'>やまと でかい</p>
                </div>
                <div className='tags-el'>
                    <p className='color-white'>Hello World</p>
                </div>
            </div>
            <div>
                <Videos />
                <Videos />

            </div>
            <section className='shorts mt-10'>
            <h2 className='text-[#fff] font-bold text-xl'>Stream Shorts</h2>
                <div className='grid-6 mt-2'>
                    {/* start */}
                <div className='main-shorts-el'>
                    <img src="https://samyam.netlify.app/assets/Knightinarmour.1e3a6e45.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[#fff]'>White night</h2>
                        <p className='text-small font-light text-[#fff]'>102K Views</p>
                    </div>
                </div>
                {/* stop */}
                {/* start */}
                <div className='main-shorts-el'>
                    <img src="https://samyam.netlify.app/assets/Knightinarmour.1e3a6e45.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[#fff]'>White night</h2>
                        <p className='text-small font-light text-[#fff]'>102K Views</p>
                    </div>
                </div>
                {/* stop */}
                {/* start */}
                <div className='main-shorts-el'>
                    <img src="https://samyam.netlify.app/assets/Knightinarmour.1e3a6e45.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[#fff]'>White night</h2>
                        <p className='text-small font-light text-[#fff]'>102K Views</p>
                    </div>
                </div>
                {/* stop */}
                </div>
                <div>
                    <Videos />
                </div>
                
            </section>
        </section>
    </section>
  )
}

export default Home