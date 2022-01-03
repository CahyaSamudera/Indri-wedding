import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import './Mempelai.css';
// import groom from '../../images/groom.jpeg';
// import bride from '../../images/bride.jpeg';
import foto2 from '../../images/mempelai-9.jpeg';

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
          <div className='foto-berdua'>
            <img src={foto2} alt='Mempelai-2' className='mempelai-7' />
          </div>
          <div className='details-bride'>
            {/* <img className='foto-mempelai' src={groom} alt='' /> */}

            <p className='calon-name'>dr. Fadhil Muhammad, B.MedSc(Hons)</p>
            <div class='social-links'>
              <a
                href='https://www.instagram.com/fadhilmd/'
                title='instagram'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i class='fab fa-instagram'></i>
              </a>
            </div>
            <p>Putra</p>
            <p>Bapak Dhani Harsono (Alm.) & </p>
            <p>Ibu Dra. Maemuna Djahrie</p>
            <p className='penghubung'>&</p>
            {/* <img className='foto-mempelai' src={bride} alt='' /> */}

            <p className='calon-name'>Risky Ananda Lubis, S.I.P., M.A</p>
            <div class='social-links'>
              <a
                href='https://www.instagram.com/riskyrizalral/'
                title='instagram'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i class='fab fa-instagram'></i>
              </a>
            </div>
            <p>Putri</p>
            <p>Bapak Ilham Siddik Lubis, S.H &</p>
            <p>Ibu Helfida Siregar, A.Md., Kep</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Mempelai;
