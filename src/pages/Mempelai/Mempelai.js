import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import './Mempelai.css';

const Mempelai = () => {
  return (
    <div className='mempelai'>
      <div className='ring-section'>
        <div className='box-ring animate__animated animate__fadeInUp'>
          <h2>﷽</h2>
          <p className='salam'>Assalamu'alaikum Warahmatullahi Wabarokatuh</p>
          <p>
            Dengan memohon rahmat dan ridho Allah SWT, kami memohon doa dan
            restu Bapak/Ibu/Saudara/i dalam melangsungkan pernikahan putra-putri
            kami:
          </p>
          <div className='details-bride'>
            <p className='calon-name'>Hermin</p>
            <p>Putra keempat</p>
            <p>Bapak Cemmeng (Alm) & </p>
            <p>Ibu Mariamu</p>
            <p className='penghubung'>&</p>
            <p className='calon-name'>Indriyani</p>
            <p>Putri pertama</p>
            <p>Bapak Siswadi & </p>
            <p>Ibu Karsidah</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Mempelai;
