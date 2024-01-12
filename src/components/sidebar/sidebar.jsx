import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebaritem'>
        <span className='sidebartitle'>ABOUT ME</span><br/>
        <img  className='sidebarimg' src="/DSC_0926.JPG" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nesciunt nobis rem tempora voluptatum exercitationem similique neque facilis sit accusantium?
             Laudantium omnis ducimus dolores quas provident. Tempora corporis sed asperiores?</p>

      </div>
      <div className='sidebaritem'>
      <span className='sidebartitle'>CATEGORIES</span><br/>
        <ol className='sidebarlist'>
            <li className='sidebarlistitem'>Life</li>
            <li className='sidebarlistitem'>Photography</li>
            <li className='sidebarlistitem'>Tech</li>
            <li className='sidebarlistitem'>Travel</li>

        </ol>
      </div>
      <div className='sidebaritem'>
      <span className='sidebartitle'>FOLLOW ME ON</span><br/>
      <div className='sidebarsocial'>
      <i class="sideicon fa-brands fa-square-facebook fa-lg"></i>
      <i class="sideicon fa-brands fa-square-x-twitter fa-lg"></i>
      <i class="sideicon fa-brands fa-square-instagram fa-lg"></i>
      </div>
      </div>


    </div>
  )
}
