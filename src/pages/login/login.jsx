import './login.css'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className='login'>
        <span className='logintitle'>Login</span>
        <form className='loginform'>
            <label >Email</label>
            <input type="email" placeholder='name@mail.com...' />
            <label >Password</label>
            <input type="password" placeholder='password....' />
            <button className='loginbtn'> Login</button>
        </form>
        <button className='loginregisterbtn'><Link to={"/register"} className='link'>Register</Link></button>
    </div>
  )
}
