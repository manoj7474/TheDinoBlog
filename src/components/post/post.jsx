import React from 'react'
import './post.css';

export default function Post() {
  return (
    <div className='post'>
       <img className='postimg' src="/mypics/homeimg.jpg" alt="" />

       <div className="postinfo">
        <div className="postcateg">
            <span>Photography</span>
            <span>Life</span>
        </div>
        <span className='posttitle'>holla amigo post title</span>
        <hr/>
        <span className='postdate'>1 hour ago</span>
       </div>
       <p className='postdesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus vel harum officia sit eius magni officiis provident libero. 
        Eligendi necessitatibus porro libero eaque saepe vel et culpa eum accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus vel harum officia sit eius magni officiis provident libero. 
        Eligendi necessitatibus porro libero eaque saepe vel et culpa eum accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus vel harum officia sit eius magni officiis provident libero. 
        Eligendi necessitatibus porro libero eaque saepe vel et culpa eum accusamus.
       </p>
    </div>
  )
}
