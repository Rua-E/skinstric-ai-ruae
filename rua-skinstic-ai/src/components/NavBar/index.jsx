import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row h-[64px] w-full justify-between py-3 mb-3 relative z-[1000]'>
      <div className='flex flex-row pt-1 scale-75 justify-center items-center '>
        <a className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-[16px] text-[#1A1B1C] z-1000' href='/'>
          SKINSTIC
        </a>
      </div>
      <button>

      </button>
    </div>
  )
}

export default NavBar
