import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class='nav'>
        <Link to='/sampul' class='nav__link'>
          <span class='material-icons nav__icon'>home</span>
          <span class='nav__text'>Sampul</span>
        </Link>
        <Link to='/mempelai' class='nav__link nav__link--active'>
          <span class='material-icons nav__icon'>favorite</span>
          <span class='nav__text'>Mempelai</span>
        </Link>

        <Link to='/acara' class='nav__link'>
          <span class='material-icons nav__icon'>event</span>
          <span class='nav__text'>Acara</span>
        </Link>
        <Link to='peta' class='nav__link'>
          <span class='material-icons nav__icon'>map</span>
          <span class='nav__text'>Peta</span>
        </Link>
        <Link to='protocol' class='nav__link'>
          <span class='material-icons nav__icon'>library_books</span>
          <span class='nav__text'>Protokol</span>
        </Link>
        <Link to='penutup' class='nav__link'>
          <span class='material-icons nav__icon'>lock_open</span>
          <span class='nav__text'>Penutup</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
