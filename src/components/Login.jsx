import React from 'react'
import './l.css';
const Login = () => {
  return (
    
    <div class="vid-container">
    <video class="bgvid" autoplay="autoplay" muted="muted" preload="auto" loop>
        <source src="img/ad.mp4" type="video/webm" />
    </video>
    <div class="inner-container">
     
      <div class="box">
        <h1 style={{marginLeft:"190px",color:"whitesmoke"}}>Login</h1>
        <form method="post" action="/login">
         
         <div className='c1'>
        <input type="text"  className='p' placeholder="Username" name="username"/>
        <input type="email" placeholder="email" className='p' style={{marginTop:"20px",color:"balck"}}  name="email"/><br></br>
        <input type="password" placeholder="Password"   className='p' style={{marginTop:"20px"}}name="password"/><br></br>
        <button type="submit" className='btn-btn-primary' style={{marginTop:"20px"}}> Login</button>
        </div>
      
    </form>
      </div>
    </div>
  </div>
  )
}

export default Login
