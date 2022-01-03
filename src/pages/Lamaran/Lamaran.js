import React from 'react';
import './Lamaran.css';
import { SRLWrapper } from 'simple-react-lightbox';
import Navbar from '../../components/Nav/Navbar';
import Lamaran1 from '../../images/lamaran-1.jpeg';
import Lamaran2 from '../../images/lamaran-2.jpeg';
import Lamaran3 from '../../images/lamaran-3.jpeg';
import Lamaran4 from '../../images/mempelai-9.jpeg';

export const Lamaran = () => {
  return (
    <div className='lamaran'>
      <section
        className='gallery animate__animated animate__fadeInUp'
        id='gallery'
      >
        <div className='global-headline'>
          <h2 className='sub-headline'>Lamaran</h2>
        </div>
        <SRLWrapper>
          <div className='content2'>
            <div className='gallery'>
              <img src={Lamaran1} alt='' />
            </div>
            <div className='gallery'>
              <img src={Lamaran2} alt='' />
            </div>
            <div className='gallery'>
              <img src={Lamaran3} alt='' />
            </div>
            <div className='gallery'>
              <img src={Lamaran4} alt='' />
            </div>
          </div>
          <div className='content2'>
            <div className='gallery'>
              <img src={Lamaran1} alt='' />
            </div>
            <div className='gallery'>
              <img src={Lamaran2} alt='' />
            </div>
            <div className='gallery'>
              <img src={Lamaran3} alt='' />
            </div>
            <div className='gallery'>
              <img src={Lamaran4} alt='' />
            </div>
          </div>
        </SRLWrapper>
      </section>

      <Navbar />
    </div>
  );
};
