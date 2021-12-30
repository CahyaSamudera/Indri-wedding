import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import './Sampul.css';
import Flower from '../../images/flower-circle.png';

const Sampul = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <h4 className='animate__animated animate__fadeInDown'>
            We Are Getting Married
          </h4>
          <div className='row'>
            <div className='footer-content'>
              <div className='couple-name animate__animated animate__fadeInDown animate__delay-0.5s'>
                <img src={Flower} alt='Flower Circle' />
                <h2>
                  Fadhil
                  <span>&</span>
                  Kiki
                </h2>
              </div>
              <p className='animate__animated animate__fadeInDown animate__delay-1s tanggal'>
                22 01 2022
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Navbar />
    </>
  );
};

export default Sampul;
