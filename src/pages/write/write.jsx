import React from 'react'
import './write.css'
export default function Write() {
  return (
    <div className='write'>
      <form className='writeform'>
        <div className='writeformgroup'>
            <label htmlFor="fileinput">
            <i class="formicon fa-solid fa-plus"></i>
            </label>
              <input type="file" id='fileinput' style={{display: "none"}} />
              <input type="text" placeholder='Title' className='titleinput'/>
        </div>
        <div className='writeformgroup'>
            <textarea  className='textinput titleinput' cols="30" rows="10" placeholder='Write...'>
                
            </textarea>
        </div>
        <button className="submitform">Post</button>
      </form>
    </div>
  )
}
