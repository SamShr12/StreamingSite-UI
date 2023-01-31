import React from 'react'
import { Link } from 'react-router-dom'

function Videos() {
  return (
<div className='grid-4 mt-10'>

<div className='videos'>
    <Link to={`/video/lol`}>
    <img src="https://samyam.netlify.app/assets/exhibtionmain2.dc1ef4d4.jpg" alt="  "  />
    </Link>
    <div className='mt-2'>
        <Link to={`/video/lol`}>
            <h2 className='font-bold text-[#fff]'>Create this kind of artwork in 5 seconds</h2>
        </Link>
        <Link to={`/user/sam`}>
        <p className='font-base text-small text-[#fff]'>SamyamTV</p>
        </Link>
    </div>
</div>
<div className='videos'>
    <Link to={`/vid/ss`}>
    <img src="https://samyam.netlify.app/assets/exhibtionmain2.dc1ef4d4.jpg" alt="  " />
    </Link>
    <div className='mt-2'>
        <Link to={`/vid/ss`}>
            <h2 className='font-bold text-[#fff]'>Create this kind of artwork in 5 seconds</h2>
        </Link>
        <Link to={`/user/sam`}>
        <p className='font-base text-small text-[#fff]'>SamyamTV</p>
        </Link>
    </div>
</div>
<div className='videos'>
    <Link to={`/vid/ss`}>
    <img src="https://samyam.netlify.app/assets/exhibtionmain2.dc1ef4d4.jpg" alt="  " />
    </Link>
    <div className='mt-2'>
        <Link to={`/vid/ss`}>
            <h2 className='font-bold text-[#fff]'>Create this kind of artwork in 5 seconds</h2>
        </Link>
        <Link to={`/user/sam`}>
        <p className='font-base text-small text-[#fff]'>SamyamTV</p>
        </Link>
    </div>
</div>
<div className='videos'>
    <Link to={`/vid/ss`}>
    <img src="https://samyam.netlify.app/assets/exhibtionmain2.dc1ef4d4.jpg" alt="  " />
    </Link>
    <div className='mt-2'>
        <Link to={`/vid/ss`}>
            <h2 className='font-bold text-[#fff]'>Create this kind of artwork in 5 seconds</h2>
        </Link>
        <Link to={`/user/sam`}>
        <p className='font-base text-small text-[#fff]'>SamyamTV</p>
        </Link>
    </div>
</div>

</div>  )
}

export default Videos