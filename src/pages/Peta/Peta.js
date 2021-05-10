import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import './Peta.css';

const Peta = () => {
  return (
    <div className='peta'>
      <div className='peta-section animate__animated animate__fadeInUp'>
        <div className='box-peta'>
          <h5>Peta Lokasi</h5>
          <div className='garis-peta'></div>
          <p>Kediaman Mempelai Wanita</p>
          <p>
            Jl. Dharma Wanita IV RT 010 RW 001 Blok F No. 6, Rawa Buaya,
            Cengkareng, Jakarta Barat
          </p>
          <div className='contact-map'>
            <iframe
              title='hermin & indri wedding location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4036.1504428522435!2d106.73148199164484!3d-6.155947205038239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7a5d870d86d%3A0x11bd4c77ae373071!2sIndriyani&#39;s%20Home!5e0!3m2!1sen!2sid!4v1620649577658!5m2!1sen!2sid'
              width='100%'
              height='auto'
              style={{ border: '0' }}
              allowfullscreen=''
              loading='lazy'
            ></iframe>
          </div>
          <div className='button'>
            <a
              className='btn btn-secondary btn-big'
              href='https://goo.gl/maps/p7snVMEfzqpjchxe9'
              target='_blank'
              rel='noreferrer'
            >
              Buka Map
            </a>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Peta;
