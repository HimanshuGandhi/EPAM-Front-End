import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    const signature='Himanshu Gandhi';
  const today = new Date().toLocaleDateString();


  return (
    <footer>
      <div id='copy'>
        <p>Submitted by Himanshu Gandhi</p>
      </div>
      <div id='ico'>
      <a href="https://www.instagram.com/himanshu.0203"> <FontAwesomeIcon icon="fa-brands fa-square-instagram" size="2xl"  style={{ marginRight: '12px' }}  /></a>
      <a href="https://www.facebook.com/himanshugandhi28"> <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="2xl" style={{ marginRight: '12px' }} /></a>
      <a href="https://twitter.com/HimanshuGandhi_"><FontAwesomeIcon icon="fa-brands fa-square-twitter" size="2xl" style={{ marginRight: '12px' }} /> </a>
      <a href="https://medium.com/@himanshukamboj135"><FontAwesomeIcon icon="fa-brands fa-medium" size="2xl" style={{ marginRight: '12px' }} /> </a>

      
      
      </div>
      <div id='sig'>
        <p>{signature}</p>
        <p>Date: {today}</p>
      </div>
    </footer>
  );
}

export default Footer;
