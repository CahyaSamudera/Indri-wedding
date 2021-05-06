import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cover.css';
import { Link } from 'react-router-dom';
import Flower from '../../images/flower-circle.png';

const Cover = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');

  return (
    <div>
      <footer className='footer-2 animate__animated animate__fadeInDown'>
        <div className='container'>
          <p className='quote'>
            Two souls with but a single thought; two hearts that beat as one.
          </p>
          <div className='row'>
            <div className='footer-content'>
              <div className='couple-name'>
                <img src={Flower} alt='Flower Circle' />
                <h2>
                  Hermin
                  <span>&</span>
                  Indri
                </h2>
              </div>
              <p>Yth,</p>
              <p>{name}</p>
              <div className='border'></div>
              <p className='tempat'>Di Tempat</p>
              <div className='btn-cover'>
                <button className='btn btn-light text-center'>
                  <Link
                    to='/sampul'
                    style={{ color: '#000', textDecoration: 'none' }}
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
