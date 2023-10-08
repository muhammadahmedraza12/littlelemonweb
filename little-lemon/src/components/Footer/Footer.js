// Footer.js
import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../images/logo.png" alt="Logo" />
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h2>Navigation</h2>
            <ul>
              <li><a style={{color:"white"}} href="/">Home</a></li>
              <li><a style={{color:"white"}} href="/about">About</a></li>
              <li><a style={{color:"white"}} href="/menu"> Menu</a></li>
        <li><a style={{color:"white"}} href="/reservations"> Reservations</a></li>
        <li><a style={{color:"white"}} href="/orderonline"> Order Online</a></li>
        <li><a style={{color:"white"}} href="/login"> Login</a></li>


           
            </ul>
          </div>
  
          <div className="footer-column">
           
          <h2>Contact</h2>
            <ul>
              <li><a style={{color:"white"}} href="/address">Address</a></li>
              <li><a style={{color:"white"}} href="/mobile">Mobile</a></li>
              <li><a style={{color:"white"}} href="/email">Email</a></li>
       


           
            </ul>

          </div>
          <div className="footer-column">
          <h2 >Social Media</h2>
            <ul>
              <li><a style={{color:"white"}} href="/facebook">Facebook</a></li>
              <li><a style={{color:"white"}} href="/instagram">Instagram</a></li>
              <li><a style={{color:"white"}} href="/linkedin">LinkedIn</a></li>
       


           
            </ul>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
