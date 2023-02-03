import React from 'react'
import { Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {MdNotifications} from'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'
function Nav() {
  return (
    <nav>
        <div className='work-flex w-95 py-5'>
            <div className='flex gap-5'>
                <BiMenu className='text-lg mt-1 color-white' />
                <Link to={`/`}>
                <h2 className='color-white'>Logo</h2>
                </Link>
            </div>
            <div className='nav-header flex color-white gap-5'>
                <MdNotifications className='text-xl mt-1'/>
                <AiFillCaretDown className='text-xl mt-1 text-[#fff]' />
                <Link to={`/user/@sam`}>
                <img src="" alt="" className='profile-img'/>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav