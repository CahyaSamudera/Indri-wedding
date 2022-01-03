import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cover.css';
import { Link } from 'react-router-dom';
import Flower from '../../images/flower-circle.png';
import foto3 from '../../images/logo-5.jpeg';

const Cover = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');

  return (
    <div>
      <footer className='footer-2 animate__animated animate__fadeInDown'>
        <div className='container'>
          <img src={foto3} alt='' className='foto-cover' />
          <p className='quote'>and so their adventure begins....</p>
          <div className='row'>
            <div className='footer-content'>
              <div className='couple-name'>
                <img src={Flower} alt='Flower Circle' />
                <h2>
                  Fadhil
                  <span>&</span>
                  Risky
                </h2>
              </div>
              <p className='yth'>Yth,</p>
              <p className='yth'>{name}</p>
              <div className='border'></div>
              <p className='tempat'>Di Tempat</p>
              <div className='btn-cover'>
                <button className='btn btn-secondary text-center'>
                  <Link
                    to='/sampul'
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    Buka Undangan
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cover;
