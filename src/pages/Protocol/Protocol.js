import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import './Protocol.css';

const Protocol = () => {
  return (
    <div className='protocol'>
      <div className='protocol-section animate__animated animate__fadeInDown'>
        <div className='box-protokol'>
          <h5>Protokol Kesehatan</h5>
          <div className='border'></div>
          <p className='para-1'>
            Acara ini akan diselenggarakan dengan mematuhi protokol kesehatan.
          </p>
          <div className='step-1'>
            <div className='icon-sign'>
              <i class='fas fa-head-side-mask fa-2x icons'></i>
            </div>
            <p>Tamu undangan diharuskan memakai masker.</p>
          </div>
          <div className='step-2'>
            <div className='icon-sign'>
              <i class='fas fa-thermometer-three-quarters fa-2x icons'></i>
            </div>
            <p>Suhu tubuh dalam keadaan normal (dibawah 37,5° C).</p>
          </div>
          <div className='step-3'>
            <div className='icon-sign'>
              <i class='fas fa-hands-wash fa-2x icons'></i>
            </div>
            <p>Cuci tangan menggunakan sabun atau hand sanitizer.</p>
          </div>
          <div className='step-4'>
            <div className='icon-sign'>
              <i class='fas fa-people-arrows fa-2x icons'></i>
            </div>
            <p>Menerapkan jaga jarak / physical distancing.</p>
          </div>
          <div className='protocol-pesan'>
            <p>
              Kami menghimbau kepada para tamu undangan untuk sekiranya mematuhi
              protokol pencegahan COVID-19
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Protocol;
