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
        </section>
    </section>
  )
}

export default Home