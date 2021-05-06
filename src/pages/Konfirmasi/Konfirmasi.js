import React from 'react';
import './Konfirmasi.css';
import Navbar from '../../components/Nav/Navbar';

const Konfirmasi = () => {
  return (
    <div className='konfirmasi'>
      <div className='konfirmasi-section animate__animated animate__fadeInDown'>
        <div className='box-konfirmasi'>
          <form
            action='/contact'
            name='contact'
            method='post'
            className='rsvp-form'
          >
            <input type='hidden' name='form-name' value='contact' />
            <div className='ucapan-title'>
              <h4>Konfirmasi Kehadiran</h4>
            </div>
            <div className='row'>
              <div className='input-group'>
                <input
                  type='text'
                  name='name'
                  className='input-control'
                  placeholder='Nama'
                  required
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group'>
                <select
                  className='input-control'
                  name='number[]'
                  type='text'
                  required
                >
                  <option value=''>Saya Hadir:</option>
                  <option value='ya'>Ya</option>
                  <option value='tidak'>Tidak</option>
                </select>
              </div>
            </div>
            <p className='text-center ucapan-nikah'>
              Ucapan untuk Hermin & Indri
            </p>
            <div className='row'>
              <div className='input-group'>
                <textarea
                  className='input-control'
                  name='message'
                  required
                ></textarea>
              </div>
            </div>
            <div className='row'>
              <div className='input-group send-form'>
                <button type='submit' className='send-form btn btn-light'>
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Konfirmasi;
