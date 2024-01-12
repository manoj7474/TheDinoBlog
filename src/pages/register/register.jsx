import './register.css'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='register'>
        <span className='registertitle'>Register</span>
        <form className='registerform'>
            <label >Username</label>
            <input type="text" placeholder='username...' />
            <label >Email</label>
            <input type="email" placeholder='name@mail.com...' />
            <label >Password</label>
            <input type="password" placeholder='password....' />
            <button className='registerbtn'>Register</button>
        </form>
        <button className='registerloginbtn'>
          <Link to={"/login"} className='link'>Login</Link></button>
    </div>
  )
}
