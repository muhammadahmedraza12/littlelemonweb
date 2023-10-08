import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <nav>
        <ul className='navStyle'>
        <li><a style={{color:"white"}} href="/"> Home</a></li>
        <li><a style={{color:"white"}} href="/about"> About</a></li>
        <li><a style={{color:"white"}} href="/menu"> Menu</a></li>
        <li><a style={{color:"white"}} href="/reservations"> Reservations</a></li>
        <li><a style={{color:"white"}} href="/orderonline"> Order Online</a></li>
        <li><a style={{color:"white"}} href="/login"> Login</a></li>



        </ul>
    </nav>
    </>
  )
}

export default Nav