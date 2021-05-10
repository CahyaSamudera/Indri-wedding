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
        <Link to='peta' className='nav__link'>
          <span className='material-icons nav__icon'>map</span>
          <span className='nav__text'>Peta</span>
        </Link>
        <Link to='protocol' className='nav__link'>
          <span className='material-icons nav__icon'>library_books</span>
          <span className='nav__text'>Protokol</span>
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
