import './settings.css'
import Sidebar from '../../components/sidebar/sidebar';

export default function settings() {
  return (
    <div className='settings'>
        <div className="settingswrapper">
          <div className="settingstitle">
            <div className="settingsupdatetitle">update title</div>
            <div className="settingsdeletetitle">delete title</div>
          </div>
          <form className='settingsform'>
            <label htmlFor="">profile picture</label>
            <div className='settingspp'>
              <img src="DSC_0926.JPG" alt="" srcset="" />
              <label htmlFor="fileinput">
              <i class="settingsppicon fa-solid fa-circle-user"></i>
              </label>
              <input type="file" id='fileinput' style={{display: 'none'}} />
            </div>
            <label >username</label>
            <input type="text" placeholder='name...' />
            <label >Email id</label>
            <input type="email" placeholder='name@mail.com...' />
            <label >password</label>
            <input type="password" placeholder='password....' />
            <button className='settingssubmit'>Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}

