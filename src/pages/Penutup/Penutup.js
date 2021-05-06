import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import './Penutup.css';
import { Link } from 'react-router-dom';

const Penutup = () => {
  return (
    <div className='penutup'>
      <div className='penutup-section animate__animated animate__fadeInUp'>
        <div className='box-penutup'>
          <p>
            Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </p>
          <p className='surat'>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu merasa
            tenang dan tenteram kepadanya, dan dijadikan-Nya di antaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir."
          </p>
          <p className='ayat'>(QS. Ar-Rum: 21)</p>
          <p className='salam-akhir'>
            Wassalamu'alaikum Warahmatullahi Wabarakatuhu
          </p>
          <p>
            Turut berbahagia, <br />
            Segenap keluarga besar
          </p>
          <h3>Hermin & Indri</h3>
          <div className='penutup-button'>
            <button className='btn btn-light btn-big'>
              <Link to='/contact' style={{ color: '#000' }}>
                Konfirmasi Kehadiran
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Penutup;
