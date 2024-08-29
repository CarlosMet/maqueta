import React from 'react'
import logo from '../images/logo.png'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-6 md:px-8 lg:px-16 bg-[#ced8e1]'>
        <div>
            <a href="#" className='flex items-center gap-0'>
                <img className='w-20' src={logo} alt="Logo"/>
                <p className='text-[28px] font-bold'>InnovArq</p>
            </a>
        </div>
        <div className='flex gap-8'>
           <button>ingresar</button>
           <button>registrarse</button>
        </div>
    </nav>
  )
}
