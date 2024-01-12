import React from 'react'
import './singlepost.css'

export default function Singlepost() {
  return (
    <div className='singlepost'>
        <div className='singlepostwrap'>
            <img className='singlepostimg' src="/mypics/cloudhome.jpg" alt="" />

            <h1 className='singleposttitle'>this the title
                <div className="singlepostedit">
                <i className="sinposticon fa-solid fa-file-pen fa-sm"></i>
                <i class="fa-solid fa-trash-can fa-sm"></i>
                </div>
            </h1>

            <div className="singlepostinfo">
                <span className='sinpostauthor'>Author: <b>author</b></span>
                <span className='sinpostdate'>1 hour ago</span>
            </div>
            <p className='singlepostdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum nisi optio assumenda dolores perspiciatis accusamus, modi deserunt? 
                Aperiam numquam debitis nostrum, quibusdam rerum cum nisi itaque consectetur hic fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum nisi optio assumenda dolores perspiciatis accusamus, modi deserunt? 
                Aperiam numquam debitis nostrum, quibusdam rerum cum nisi itaque consectetur hic fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum nisi optio assumenda dolores perspiciatis accusamus, modi deserunt? 
                Aperiam numquam debitis nostrum, quibusdam rerum cum nisi itaque consectetur hic fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum nisi optio assumenda dolores perspiciatis accusamus, modi deserunt? 
                Aperiam numquam debitis nostrum, quibusdam rerum cum nisi itaque consectetur hic fugit.</p>

        </div>
      
    </div>
  )
}
