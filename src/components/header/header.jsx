import React from 'react'
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headertitle'>
        <span className='headertitlebg'>The Dino Blog</span>
        {/* <span className='headertitlesm'>Blog</span> */}
      </div>
      <img className='titleimg' src="/mypics/cloudhome.jpg" alt="" />
    </div>
  )
}
