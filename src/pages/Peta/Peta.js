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
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8116023144285!2d106.73132131424707!3d-6.155981662050346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7f25c3fdae5%3A0xa0bb07be821fc7fe!2s6%2C%20Jl.%20Darma%20Wanita%20IV%20Blok%20F%20No.5%2C%20RT.10%2FRW.1%2C%20Rw.%20Buaya%2C%20Kecamatan%20Cengkareng%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011740!5e0!3m2!1sen!2sid!4v1620189288090!5m2!1sen!2sid'
              width='100%'
              height='auto'
              style={{ border: '0' }}
              allowfullscreen=''
              loading='lazy'
            ></iframe>
          </div>
          <div className='button'>
            <a
              className='btn btn-light btn-big'
              href='https://goo.gl/maps/VBSaGtRFCaZQ4kFU7'
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
