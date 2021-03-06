import React, { useEffect, useState, useRef } from 'react';
import './Acara.css';
import Navbar from '../../components/Nav/Navbar';

const Acara = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('January 22, 2022 01:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Stop our timer
        clearInterval(interval.current);
      } else {
        // Update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  // componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line
      clearInterval(interval.current);
    };
  });
  return (
    <div className='acara'>
      <div className='acara-section animate__animated animate__fadeInDown'>
        <div className='box-acara'>
          <h5>Rangkaian Acara</h5>
          {/* <div className='upper-acara'>
            <div className='border-acara'></div>
            <h4>Akad Nikah</h4>
            <div className='border-acara'></div>
          </div> */}

          {/* <div className='row no-gutters d-flex justify-content-center'>
            <div className='col-auto text-left lead d-flex align-items-center pr-3'>
              <p className='hari-acara'>
                Sabtu
                <br />
                <span>8.00</span>
              </p>
            </div>
            <div className='col-auto d-flex align-items-center date-acara'>
              <p>22</p>
            </div>
            <div className='col-auto text-left lead d-flex align-items-center'>
              <p className='hari-acara'>
                Januari
                <br />
                <span>2022</span>
              </p>
            </div>
          </div>
          <p className='acara-tempat'>Grand Amarossa Bekasi</p> */}

          <div className='upper-acara'>
            <div className='border-acara'></div>
            <h4>Resepsi</h4>
            <div className='border-acara'></div>
          </div>

          <div className='row no-gutters d-flex justify-content-center'>
            <div className='col-auto text-left lead d-flex align-items-center pr-3'>
              <p className='hari-acara'>
                Sabtu
                <br />
                <span>10.30</span>
              </p>
            </div>
            <div className='col-auto d-flex align-items-center date-acara'>
              <p>22</p>
            </div>
            <div className='col-auto text-left lead d-flex align-items-center'>
              <p className='hari-acara'>
                Januari
                <br />
                <span>2022</span>
              </p>
            </div>
          </div>

          <div className='alamat'>
            <p className='acara-tempat'>Grand Amarossa Bekasi</p>
            <p>
              Jl. A.Yani No.88 RT.004/RW.001, Marga Jaya, Kec. Bekasi Sel, Kota
              Bekasi, Jawa Barat 17141
            </p>
          </div>
          <p className='acara-jam'>Hitung Mundur Acara</p>
          <div className='hitung-mundur'>
            <section>
              <p>
                {timerDays} <br />
                <small>Hari</small>
              </p>
            </section>
            <section>
              <p>
                {timerHours} <br />
                <small>Jam</small>
              </p>
            </section>
            <section>
              <p>
                {timerMinutes} <br />
                <small>Menit</small>
              </p>
            </section>
            <section>
              <p>
                {timerSeconds} <br />
                <small>Detik</small>
              </p>
            </section>
          </div>
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
          <div className='button-peta'>
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

export default Acara;
