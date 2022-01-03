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
          <p>Hotel Amaroossa Grande Bekasi</p>
          <p>
            Jl. A.Yani No.88 RT.004/RW.001, Marga Jaya, Kec. Bekasi Sel, Kota
            Bekasi, Jawa Barat 17141
          </p>
          <div className='contact-map'>
            <iframe
              title='Fadhil & Risky wedding location'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.399988869382!2d106.9920991!3d-6.250553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7fd1ad1e12b3c089!2sHotel%20Amaroossa%20Grande%20Ahmad%20Yani%20Bekasi!5e0!3m2!1sid!2sid!4v1640838784765!5m2!1sid!2sid'
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
              href='https://g.page/hotel-amaroossa-grande?share'
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
