import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <Link to='/sampul' className='nav__link'>
          <span className='material-icons nav__icon'>home</span>
          <span className='nav__text'>Sampul</span>
        </Link>
        <Link to='/mempelai' className='nav__link nav__link--active'>
          <span className='material-icons nav__icon'>favorite</span>
          <span className='nav__text'>Mempelai</span>
        </Link>

        <Link to='/acara' className='nav__link'>
          <span className='material-icons nav__icon'>event</span>
          <span className='nav__text'>Acara</span>
        </Link>
        <Link to='lamaran' className='nav__link'>
          <span className='material-icons nav__icon'>trip_origin</span>
          <span className='nav__text'>Lamaran</span>
        </Link>
        <Link to='angpao' className='nav__link'>
          <span className='material-icons nav__icon'>card_giftcard</span>
          <span className='nav__text'>E-Angpao</span>
        </Link>
        <Link to='penutup' className='nav__link'>
          <span className='material-icons nav__icon'>lock_open</span>
          <span className='nav__text'>Penutup</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
