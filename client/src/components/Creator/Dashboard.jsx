import React from 'react'
import CreatorNav from './CreatorNav'
import Videos from '../Videos'
import CreatorSiderBar from './CreatorSiderBar'
function Dashboard() {
  return (
    <section>
        <div>
            <CreatorNav />
        </div>
        <section className='mainbody flex gap-2'>
            <div>
                <CreatorSiderBar />
            </div>
            <div className='main-creator-dash'>
                <h2 className='font-bold text-2xl text-[#fff]'>Contents</h2>
                <div className='flex gap-14 font-bold '>
                    <p className='text-[#fff]'>Videos</p>
                    <p className='text-[#fff]'>Live</p>
                    <p className='text-[#fff]'>Playlists</p>
                </div>
                <div className='main-content-vids'>
                    <Videos />
                </div>
            </div>
        </section>
    </section>
  )
}

export default Dashboard