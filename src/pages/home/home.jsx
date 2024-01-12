import React from 'react'
import './home.css';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Posts from '../../components/posts/posts';

export default function Home() {
  return (
    <div>
      <Header/>
      
      <div className='home'>
        
        <Posts/>
        <Sidebar/>
      </div>
    </div>
  )
}
